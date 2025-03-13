package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.OrderDTO;
import com.tamtac.tamtac.dto.OrderIemDTO;
import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.entity.*;
import com.tamtac.tamtac.entity.keys.KeyBranchProduct;
import com.tamtac.tamtac.entity.keys.KeyOrderItem;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.request.OrderItemRequest;
import com.tamtac.tamtac.payload.request.OrderRequest;
import com.tamtac.tamtac.repository.*;
import com.tamtac.tamtac.service.Imp.OrderServiceImp;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderService implements OrderServiceImp {

    @Autowired
    private OrderRepository orderRepository;

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
    @Transactional
    public OrderDTO createOrder(OrderRequest orderRequest) {
        Order order = new Order();

        double subtotal = countSubTotal(orderRequest);
        order.setSubTotal(subtotal);

        double discountValue = 0;
        if(!orderRequest.getPromotionCode().isEmpty()){

            Promotion promotion = promotionRepository.findById(UUID.fromString(orderRequest.getPromotionCode())).orElseThrow(() -> new ResourceNotFoundException("PROMOTION NOT FOUND"));
            order.setPromotionCode(orderRequest.getPromotionCode());
            order.setDiscountPercent(promotion.getValue());
            discountValue = (promotion.getValue() / 100.0) * subtotal;
        }

        order.setDiscountValue(discountValue);

        double shippingFee = 0;
        String address = "";
        if(!orderRequest.isPickUp()) {
            shippingFee = 50000;
            address = orderRequest.getAddress();
        } else{
            address = null;
        }
        order.setShippingFee(shippingFee);

        order.setDeliveryAtt(null);
        order.setNote(orderRequest.getNote());
        order.setPaymentCode(null);
        order.setAddress(address);
        order.setPhone(orderRequest.getPhoneNumber());
        order.setPointUsed(orderRequest.getPointUsed());
        order.setPointEarned((int) (subtotal/1000));
        order.setCreatedAt(new Date());
        order.setPickUp(orderRequest.isPickUp());
        order.setCustomer(userRepository.findById(orderRequest.getCustomerId()).orElseThrow(() -> new ResourceNotFoundException("CUSTOMER NOT FOUND")));
        order.setWorker(null);
        order.setStatus(orderStatusRepository.findByName("PENDING"));
        order.setPaymentMethod(paymentMethodrepository.findById(orderRequest.getPaymentMethodId()).orElseThrow(() -> new RuntimeException("NOT VALID PAYMENT METHOD")));
        order.setBranch(branchRepository.findById(orderRequest.getBranchId()).orElseThrow(() -> new RuntimeException("NOT VALID BRANCH")));
        order.setAmount(countAmount(subtotal, discountValue, shippingFee, orderRequest.getPointUsed()));
        orderRepository.save(order);

        List<OrderItemRequest> orderItemsRequests = orderRequest.getOrderItems();

        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemRequest orderItemRequest : orderItemsRequests) {
            OrderItem orderItem = new OrderItem();
            Product product = productRepository.findById(orderItemRequest.getProductId()).orElseThrow(() -> new ResourceNotFoundException("PRODUCT NOT FOUND"));

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
            branchProduct.setQuantity(branchProduct.getQuantity()-orderItemRequest.getQuantity());
            branchProductRepository.save(branchProduct);
            orderItems.add(orderItem);
        }
        order.setOrderItems(orderItems);

        orderRepository.save(order);
        return transferDTOForCustomer(order);
    }

    @Override
    public OrderDTO getOrderById(int id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("ORDER NOT FOUND"));
        return transferDTOForCustomer(order);
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
            if(orderItem.getQuantity()>branchProduct.getQuantity()){
                throw new RuntimeException("PRODUCT OUT OF STOCK");
            }

            subTotal += product.getPrice() * orderItem.getQuantity();
        }
        return subTotal;
    }

    private double countAmount(double subTotal, double discountValue,  double shippingFee, int pointUsed) {
        return subTotal - discountValue - pointUsed*100 + shippingFee;
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
        orderDTO.setIsPickUp(order.isPickUp());

        if (order.isPickUp()) {
            orderDTO.setShipping_fee(0.0);
        } else {
            orderDTO.setAddress(order.getAddress());
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
        orderIemDTO.setProductId(orderItem.getProduct().getId());
        orderIemDTO.setOrderId(orderItem.getOrder().getId());
        orderIemDTO.setQuantity(orderItem.getQuantity());
        orderIemDTO.setPrice(orderItem.getPrice());
        orderIemDTO.setNote(orderItem.getNote());
        if (orderItem.isFeedbacked()) {
            orderIemDTO.setFeedback(orderItem.getFeedback());
            orderIemDTO.setFeedBackYet(orderItem.isFeedbacked());
            orderIemDTO.setFeedbackPoint(orderItem.getFeedbackPoint());
            orderIemDTO.setExpiredFeedbackTime(orderItem.getExpiredFeedBackDate());
        }

        return orderIemDTO;
    }
}
