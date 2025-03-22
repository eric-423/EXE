package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.PaymentDTO;
import com.tamtac.tamtac.entity.Order;
import jakarta.servlet.http.HttpServletRequest;

public interface VNPayServiceImp {
    String createVnPayPayment(HttpServletRequest request, Order order);
}
