package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.CustomerDTO;
import com.tamtac.tamtac.dto.OrderDTO;
import com.tamtac.tamtac.dto.OrderIemDTO;
import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.entity.*;
import com.tamtac.tamtac.entity.keys.KeyBranchProduct;
import com.tamtac.tamtac.entity.keys.KeyMaterialWarehouse;
import com.tamtac.tamtac.entity.keys.KeyOrderItem;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.request.LoginCustomerRequest;
import com.tamtac.tamtac.payload.request.OrderItemRequest;
import com.tamtac.tamtac.payload.request.OrderRequest;
import com.tamtac.tamtac.repository.*;
import com.tamtac.tamtac.service.Imp.AiServiceImp;
import com.tamtac.tamtac.service.Imp.OrderServiceImp;
import com.tamtac.tamtac.service.Imp.PdfFileServiceImp;
import com.tamtac.tamtac.service.Imp.VNPayServiceImp;
import com.tamtac.tamtac.untils.JwtTokenHelper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class OrderService implements OrderServiceImp {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private RoleHistoryRepository roleHistoryRepository;

    @Autowired
    private PaymentMethodrepository paymentMethodrepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private BranchProductRepository branchProductRepository;

    @Autowired
    private OrderStatusRepository orderStatusRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private MaterialWarehouseRepository materialWarehouseRepository;

    @Autowired
    private VNPayServiceImp vnpayServiceImp;

    @Autowired
    private PdfFileServiceImp pdfFileServiceImp;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private AiServiceImp aiServiceImp;

    @Value("${jwt.secretkey}")
    private String key;


    private void checkValidCustomer(String token, int customerId) {
        User user = userRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));

        String tokenFinal = token.replace("Bearer ", "");
        Claims claims;
        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));

        try {
            claims = Jwts.parser()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(tokenFinal)
                    .getBody();
            int id = (int) claims.get("id");
            if (id != user.getId()) throw new RuntimeException("Token is invalid");
        } catch (Exception e) {
            throw new RuntimeException("Token is invalid");
        }
    }


    @Override
    public Page<OrderDTO> findByCustomerId(int customerId, int page, int size) {

        User customer = userRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("CUSTOMER NOT FOUND"));

        List<Order> orderList = orderRepository.findByCustomer_Id(customer.getId());

        List<OrderDTO> orderDTOS = new ArrayList<>();

        for (Order order : orderList) {
            orderDTOS.add(transferDTOForCustomer(order));
        }
        int totalElements = orderDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<OrderDTO> subList = orderDTOS.subList(start, end);

        Page<OrderDTO> result = new PageImpl<>(subList, PageRequest.of(page, size), totalElements);


        return result;
    }

    @Override
    public Page<OrderDTO> findOrderForShipper(int shipperId, int statusId, int page, int size) {
        List<Order> orderList = new ArrayList<>();
        if (statusId == 0) {
            orderList = orderRepository.findByShipper_Id(shipperId);
        } else {
            orderList = orderRepository.findByShipper_IdAndStatus_Id(shipperId, statusId);
        }
        List<OrderDTO> orderDTOS = new ArrayList<>();
        for (Order order : orderList) {
            orderDTOS.add(transferDTOForCustomer(order));
        }
        int totalElements = orderDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<OrderDTO> subList = orderDTOS.subList(start, end);

        Page<OrderDTO> result = new PageImpl<>(subList, PageRequest.of(page, size), totalElements);
        return result;
    }

    @Override
    public Page<OrderDTO> findOrderInBranchByStatus(int branchId, int statusId, int page, int size) {
        List<Order> orderList = orderRepository.findByBranch_IdAndStatus_Id(branchId, statusId);
        List<OrderDTO> orderDTOS = new ArrayList<>();
        for (Order order : orderList) {
            orderDTOS.add(transferDTOForCustomer(order));
        }
        int totalElements = orderDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<OrderDTO> subList = orderDTOS.subList(start, end);

        Page<OrderDTO> result = new PageImpl<>(subList, PageRequest.of(page, size), totalElements);
        return result;
    }

    @Override
    @Transactional
    public Map<String, Object> createOrder(HttpServletRequest request, OrderRequest orderRequest) {
        try {
            Order order = new Order();

            double subtotal = countSubTotal(orderRequest);
            order.setSubTotal(subtotal);

            double discountValue = 0;
            if (!orderRequest.getPromotionCode().isEmpty()) {

                Promotion promotion = promotionRepository.findById(UUID.fromString(orderRequest.getPromotionCode())).orElseThrow(() -> new ResourceNotFoundException("PROMOTION NOT FOUND"));

                if (promotion.getUser().getId() != orderRequest.getCustomerId()) {
                    throw new RuntimeException("INVALID PROMOTION CODE");
                }

                if (promotion.getPromotionType().getName().equals("No Limit")) {
                    order.setPromotionCode(orderRequest.getPromotionCode());
                    discountValue = promotion.getValue();
                }

                if (promotion.getPromotionType().getName().equals("Limit")) {
                    if (subtotal >= promotion.getMinimumOrderValue()) {
                        order.setPromotionCode(orderRequest.getPromotionCode());
                        discountValue = promotion.getValue();
                    } else {
                        throw new RuntimeException("INVALID PROMOTION CODE");
                    }
                }
            }

            order.setDiscountValue(discountValue);

            double shippingFee = 0;
            String address = "";
            if (!orderRequest.isPickUp()) {
                shippingFee = 50000;
                address = orderRequest.getAddress();
            } else {
                address = null;
            }
            order.setShippingFee(shippingFee);

            User customer = userRepository.findById(orderRequest.getCustomerId()).orElseThrow(() -> new ResourceNotFoundException("CUSTOMER NOT FOUND"));
            order.setDeliveryAtt(null);
            order.setNote(orderRequest.getNote());
            order.setPaymentCode(null);
            order.setAddress(address);
            order.setPhone(orderRequest.getPhoneNumber());
            order.setPointUsed(orderRequest.getPointUsed());
            order.setPointEarned((int) (subtotal / 10000));

            order.setCreatedAt(new Date());
            order.setPickUp(orderRequest.isPickUp());
            order.setCustomer(customer);
            order.setWorker(null);
            order.setShipper(null);

            order.setPaymentMethod(paymentMethodrepository.findById(orderRequest.getPaymentMethodId()).orElseThrow(() -> new RuntimeException("NOT VALID PAYMENT METHOD")));
            order.setBranch(branchRepository.findById(orderRequest.getBranchId()).orElseThrow(() -> new RuntimeException("NOT VALID BRANCH")));
            order.setAmount(countAmount(subtotal, discountValue, shippingFee, orderRequest.getPointUsed()));
            customer.setMemberPoint(customer.getMemberPoint() + order.getPointEarned() - orderRequest.getPointUsed());
            orderRepository.save(order);

            List<OrderItemRequest> orderItemsRequests = orderRequest.getOrderItems();

            List<OrderItem> orderItems = new ArrayList<>();
            for (OrderItemRequest orderItemRequest : orderItemsRequests) {
                OrderItem orderItem = new OrderItem();
                Product product = productRepository.findById(orderItemRequest.getProductId()).orElseThrow(() -> new ResourceNotFoundException("PRODUCT NOT FOUND"));

                List<ProductRecipes> productRecipesList = product.getProductRecipes();
                for (ProductRecipes productRecipes : productRecipesList) {
                    double quantity = productRecipes.getQuantity();
                    Material material = productRecipes.getMaterial();
                    Warehouse warehouse = branchRepository.findById(orderRequest.getBranchId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Branch")).getWarehouse();
                    KeyMaterialWarehouse keyMaterialWarehouse = new KeyMaterialWarehouse();
                    keyMaterialWarehouse.setMaterialId(material.getId());
                    keyMaterialWarehouse.setWarehouseId(warehouse.getId());
                    MaterialWarehouse materialWarehouse = materialWarehouseRepository.findByKeyMaterialWarehouse(keyMaterialWarehouse);

                    if (materialWarehouse.getQuantity() < quantity) {
                        throw new RuntimeException("Invalid quantity");
                    }
                    materialWarehouse.setQuantity(materialWarehouse.getQuantity() - quantity);
                    materialWarehouseRepository.save(materialWarehouse);
                }

                KeyOrderItem keyOrderItem = new KeyOrderItem();
                keyOrderItem.setOrderId(order.getId());
                keyOrderItem.setProductId(product.getId());
                orderItem.setKeyOrderItem(keyOrderItem);

                orderItem.setOrder(order);
                orderItem.setProduct(product);
                orderItem.setQuantity(orderItemRequest.getQuantity());
                orderItem.setPrice(product.getPrice());
                orderItem.setNote(orderItemRequest.getNote());
                orderItem.setFeedbacked(false);
                Date currentDate = new Date();

                Calendar calendar = Calendar.getInstance();
                calendar.setTime(currentDate);
                calendar.add(Calendar.HOUR_OF_DAY, 24);

                Date newDate = calendar.getTime();
                orderItem.setExpiredFeedBackDate(newDate);
                orderItemRepository.save(orderItem);

                BranchProduct branchProduct = branchProductRepository.findByKeyBranchProduct(new KeyBranchProduct(orderRequest.getBranchId(), orderItemRequest.getProductId()));
                branchProduct.setQuantity(branchProduct.getQuantity() - orderItemRequest.getQuantity());
                branchProductRepository.save(branchProduct);
                orderItems.add(orderItem);
            }

            order.setOrderItems(orderItems);
            orderRepository.save(order);
            order.setStatus(orderStatusRepository.findByName("Chờ thanh toán"));

            Map<String, Object> result = new HashMap<>();

            if (orderRequest.getPaymentMethodId() == 2) {
                result.put("order", transferDTOForCustomer(order));
                String paymentUrl = vnpayServiceImp.createVnPayPayment(request, order);
                result.put("payment_url", paymentUrl);

                String vnpExpireDate = getParameterValue(paymentUrl, "vnp_ExpireDate");
                order.setExpiredPaymentTime(convertDate(vnpExpireDate));
                order.setPaymentUrl(paymentUrl);
                orderRepository.save(order);
                return result;
            } else if (orderRequest.getPaymentMethodId() == 1) {
                order.setPaymentCode("CASH" + order.getId());
                order.setStatus(orderStatusRepository.findByName("Đặt hàng thành công"));
                orderRepository.save(order);
                result.put("order", transferDTOForCustomer(order));
                return result;
            } else {
                throw new RuntimeException("INVALID PAYMENT METHOD");
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Map<String, Object> changeToInProcess(int orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
        Map<String, Object> result = new HashMap<>();
        if (order.getStatus().getName().equals("Đặt hàng thành công")) {

            List<User> users = new ArrayList<>();
            List<RoleHistory> roleHistorys = roleHistoryRepository.findByRole_IdAndBranch_IdAndIsActive(6, order.getBranch().getId(), true);

            for (RoleHistory roleHistory : roleHistorys) {
                if (!roleHistory.getUser().isBusy()) {
                    users.add(roleHistory.getUser());
                }
            }

            if (users.size() == 0) {
                throw new RuntimeException("ALL WORKER ARE BUSY NOW");
            }

            User worker = users.get(0);
            order.setWorker(worker);
            order.setStatus(orderStatusRepository.findByName("Đang chuẩn bị"));
            orderRepository.save(order);
            String invoiceUrl = pdfFileServiceImp.createInvoice(order);
            result.put("order", transferDTOForCustomer(order));
            result.put("invoice_url", invoiceUrl);
        }
        return result;
    }

    private String getParameterValue(String url, String paramName) {
        String[] parts = url.split("\\?");
        if (parts.length > 1) {
            String[] params = parts[1].split("&");
            for (String param : params) {
                String[] keyValue = param.split("=");
                if (keyValue.length > 1 && keyValue[0].equals(paramName)) {
                    return keyValue[1];
                }
            }
        }
        return null;
    }


    private Date convertDate(String dateString) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        try {
            Date date = formatter.parse(dateString);
            return date;
        } catch (ParseException e) {
            throw new RuntimeException("INVALID DATE FORMAT");
        }
    }


    @Override
    public OrderDTO getOrderById(int id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
        return transferDTOForCustomer(order);
    }

    @Override
    public OrderDTO changeToDelivered(int orderId, int userId) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
        if (!order.getStatus().getName().equals("Đang giao")) {
            throw new RuntimeException("Order is not in delivery status");
        }

        if (order.getShipper().getId() == userId) {
            order.setStatus(orderStatusRepository.findByName("Đã giao"));
            User shipper = order.getShipper();
            shipper.setBusy(false);
            userRepository.save(shipper);
            orderRepository.save(order);
            return transferDTOForCustomer(order);
        } else {
            throw new RuntimeException("YOU ARE NOT THE SHIPPER =)");
        }
    }

    @Override
    public boolean cancelOrder(int orderId, String token, int customerId) {
        checkValidCustomer(token, customerId);
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
        if (order.getStatus().getName().equals("Đã nhận") || order.getStatus().getName().equals("Đã giao") || order.getStatus().getName().equals("Đang giao")) {
            throw new RuntimeException("CANNOT CANCEL ORDER BECAUSE ORDER IS IN DELIVERY STATUS");
        }
        order.setStatus(orderStatusRepository.findByName("Đã hủy"));
        orderRepository.save(order);
        User user = order.getCustomer();
        user.setMemberPoint(user.getMemberPoint() + order.getPointUsed());
        return true;
    }

    @Override
    public Map<String, Object> getOrderStatusWithRealTime(int orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
        Map<String, Object> result = new HashMap<>();
        result.put("status", order.getStatus().getName());
        result.put("time_output", new Date());
        return result;
    }

    @Override
    public OrderDTO changeToDelivery(int orderId) {
        try {
            Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
            if (order.getStatus().getName().equals("Đang chuẩn bị")) {
                order.setStatus(orderStatusRepository.findByName("Đang giao"));
                List<RoleHistory> roleHistorys = roleHistoryRepository.findByRole_IdAndBranch_IdAndIsActive(5, order.getBranch().getId(), true);

                List<User> users = new ArrayList<>();

                for (RoleHistory roleHistory : roleHistorys) {
                    if (!roleHistory.getUser().isBusy()) {
                        users.add(roleHistory.getUser());
                    }
                }

                if (users.size() == 0) {
                    throw new RuntimeException("ALL SHIPPER ARE BUSY NOW");
                }

                User shipper = users.get(0);
                shipper.setBusy(true);
                userRepository.save(shipper);
                order.setShipper(shipper);
                orderRepository.save(order);
                return transferDTOForCustomer(order);
            }
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
        return null;
    }


    public String getOrderForAI(int branchId, Date startDate, Date endDate) {
        List<Order> orders = orderRepository.findByBranch_IdAndCreatedAtBetween(branchId, startDate, endDate);
        List<OrderDTO> orderDTOS = new ArrayList<>();

        for (Order order : orders) {
            OrderDTO orderDTO = transferDTOforAI(order);
            orderDTOS.add(orderDTO);
        }
        System.out.println("total order" + orders.size());
        StringBuilder result = new StringBuilder();
        for (OrderDTO orderDTO : orderDTOS) {
            System.out.println(orderDTO.toString());
            result.append(orderDTO.toString());
        }

        return result.toString();
    }

    @Override
    public Map<String, Object> callOrderMetricForAI(Date startDate, Date endDate, int branchId) {
        return aiServiceImp.getMetricFromAI(getOrderForAI(branchId, startDate, endDate));

    }

    private double countSubTotal(OrderRequest orderRequests) {
        double subTotal = 0;
        List<OrderItemRequest> orderItems = orderRequests.getOrderItems();

        for (OrderItemRequest orderItem : orderItems) {
            Product product = productRepository.findById(orderItem.getProductId()).orElseThrow(() -> new ResourceNotFoundException("PRODUCT NOT FOUND"));

            BranchProduct branchProduct = branchProductRepository.findByKeyBranchProduct(new KeyBranchProduct(orderRequests.getBranchId(), orderItem.getProductId()));
            if (branchProduct == null) {
                throw new ResourceNotFoundException("PRODUCT NOT FOUND IN THIS BRANCH");
            }
            if (orderItem.getQuantity() > branchProduct.getQuantity()) {
                throw new RuntimeException("PRODUCT OUT OF STOCK");
            }

            subTotal += product.getPrice() * orderItem.getQuantity();
        }
        return subTotal;
    }

    private double countAmount(double subTotal, double discountValue, double shippingFee, int pointUsed) {
        return subTotal - discountValue - pointUsed * 1000 + shippingFee;
    }

    private OrderDTO transferDTOforAI(Order order) {
        OrderDTO orderDTO = transferDTOForCustomer(order);

        CustomerDTO customerDTO = customerService.toDTO(order.getCustomer());
        orderDTO.setCustomerDTO(customerDTO);
        return orderDTO;
    }

    private OrderDTO transferDTOForCustomer(Order order) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getId());
        orderDTO.setSubTotal(order.getSubTotal());
        orderDTO.setPromotionCode(order.getPromotionCode());
        orderDTO.setDiscountValue(order.getDiscountValue());
        orderDTO.setDiscountPercent(order.getDiscountPercent());
        orderDTO.setAmount(order.getAmount());
        orderDTO.setNote(order.getNote());
        orderDTO.setOrderStatus(order.getStatus().getName());
        orderDTO.setIsPickUp(order.isPickUp());

        if (order.isPickUp()) {
            orderDTO.setShippingFee(0.00);
        } else {
            orderDTO.setAddress(order.getAddress());
            orderDTO.setShippingFee(order.getShippingFee());
        }
        if (order.getPaymentCode() != null) {
            orderDTO.setPayment_code(order.getPaymentCode());
            if (order.getDeliveryAtt() != null) {
                orderDTO.setDelivery_at(order.getDeliveryAtt());
            }
        }
        orderDTO.setPhone(order.getPhone());
        orderDTO.setPointUsed(order.getPointUsed());
        orderDTO.setPointEarned(order.getPointEarned());
        orderDTO.setCreatedAt(order.getCreatedAt());
        List<OrderItem> orderItems = order.getOrderItems();
        List<OrderIemDTO> orderIemDTOS = new ArrayList<>();

        for (OrderItem orderItem : orderItems) {
            orderIemDTOS.add(transferOrderItem(orderItem));
        }
        orderDTO.setOrderItems(orderIemDTOS);
        return orderDTO;
    }

    private OrderIemDTO transferOrderItem(OrderItem orderItem) {
        OrderIemDTO orderIemDTO = new OrderIemDTO();
        Product product = orderItem.getProduct();

        orderIemDTO.setProductId(orderItem.getProduct().getId());
        orderIemDTO.setOrderId(orderItem.getOrder().getId());
        orderIemDTO.setQuantity(orderItem.getQuantity());
        orderIemDTO.setPrice(orderItem.getPrice());
        orderIemDTO.setNote(orderItem.getNote());
        orderIemDTO.setProductImg(product.getImage());
        orderIemDTO.setProductName(product.getName());
        if (orderItem.isFeedbacked()) {
            orderIemDTO.setFeedback(orderItem.getFeedback());
            orderIemDTO.setFeedBackYet(orderItem.isFeedbacked());
            orderIemDTO.setFeedbackPoint(orderItem.getFeedbackPoint());
            orderIemDTO.setExpiredFeedbackTime(orderItem.getExpiredFeedBackDate());
        }

        return orderIemDTO;
    }
}
