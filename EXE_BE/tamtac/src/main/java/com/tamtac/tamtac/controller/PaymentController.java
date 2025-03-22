package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.entity.Order;
import com.tamtac.tamtac.entity.OrderStatus;
import com.tamtac.tamtac.entity.PaymentMethod;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.repository.OrderRepository;
import com.tamtac.tamtac.repository.OrderStatusRepository;
import com.tamtac.tamtac.repository.PaymentMethodrepository;
import com.tamtac.tamtac.service.Imp.OrderServiceImp;
import com.tamtac.tamtac.service.Imp.VNPayServiceImp;
import io.swagger.v3.oas.annotations.Hidden;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Date;

@RestController
@RequestMapping("/payment")
@Hidden
public class PaymentController {


    private final VNPayServiceImp paymentService;

    private final OrderStatusRepository orderStatusRepository;

    private final OrderRepository orderRepository;

    private final PaymentMethodrepository paymentMethodRepository;

    public PaymentController(VNPayServiceImp paymentService, OrderStatusRepository orderStatusRepository, OrderServiceImp orderServiceImp, OrderRepository orderRepository, PaymentMethodrepository paymentMethodRepository){
        this.paymentService = paymentService;
        this.orderStatusRepository = orderStatusRepository;
        this.orderRepository = orderRepository;
        this.paymentMethodRepository = paymentMethodRepository;
    }

    private final String successUrl = "https://exe-seven.vercel.app/payment-success";

    private final String failureUrl = "https://www.facebook.com/";



    @GetMapping("/vn-pay-callback")
    public RedirectView payCallbackHandler(@RequestParam String vnp_TransactionStatus, @RequestParam String vnp_TransactionNo, @RequestParam int orderId){

        if (vnp_TransactionStatus.equals("00")) {
            Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
            order.setPaymentTime(new Date());
            order.setPaymentCode(vnp_TransactionNo);
            OrderStatus orderStatus = orderStatusRepository.findByName("Đặt hàng thành công");
            order.setStatus(orderStatus);
            orderRepository.save(order);
            return new RedirectView(successUrl);
        } else {
            return new RedirectView(failureUrl);
        }
    }


    @PostMapping("/cash")
    public ResponseEntity<?> paymentByCash(@RequestParam int orderId) {

        Order order = orderRepository.findById(orderId).orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        order.setPaymentTime(new Date());
        order.setPaymentCode("CASH" + orderId);
        OrderStatus orderStatus = orderStatusRepository.findByName("Đặt hàng thành công");
        order.setStatus(orderStatus);
        PaymentMethod payments = paymentMethodRepository.findById(1).orElseThrow(() -> new ResourceNotFoundException("Payment method not found"));
        order.setPaymentMethod(payments);
        orderRepository.save(order);
        ResponseData responseData = new ResponseData();
        responseData.setData(true);
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }



}
