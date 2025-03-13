package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.OrderDTO;
import com.tamtac.tamtac.payload.request.OrderRequest;
import org.springframework.data.domain.Page;

public interface OrderServiceImp {
    Page<OrderDTO> findByCustomerId(int customerId, int page, int size);

    OrderDTO createOrder(OrderRequest orderRequest);

    OrderDTO getOrderById(int id);
}
