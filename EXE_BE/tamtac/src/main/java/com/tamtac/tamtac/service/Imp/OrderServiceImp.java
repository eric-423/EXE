package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.OrderDTO;
import com.tamtac.tamtac.payload.request.OrderRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.json.JSONObject;
import org.springframework.data.domain.Page;

import java.util.Date;
import java.util.Map;

public interface OrderServiceImp {
    Page<OrderDTO> findByCustomerId(int customerId, int page, int size);

    Map<String, Object> createOrder(HttpServletRequest request, OrderRequest orderRequest);

    Map<String, Object> changeToInProcess(int orderId);

    OrderDTO getOrderById(int id);

    OrderDTO changeToDelivered(int orderId, int userId);

    boolean cancelOrder(int orderId,String token, int customerId);

    Map<String,Object> getOrderStatusWithRealTime(int orderId);

    OrderDTO changeToDelivery(int orderId);

    Page<OrderDTO> findOrderForShipper(int shipperId, int statusId, int page, int size);

    Page<OrderDTO> findOrderInBranchByStatus(int branchId, int statusId, int page, int size);

    Map<String,Object> callOrderMetricForAI(Date startDate, Date endDate, int branchId);
}
