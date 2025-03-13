package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.payload.request.OrderRequest;
import com.tamtac.tamtac.service.Imp.OrderServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderServiceImp orderServiceImp;

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<?> getAllOrdersByCustomer(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "0") int status, @RequestParam(defaultValue = "0") int customerId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.findByCustomerId(customerId, page, size));
        return ResponseEntity.ok(responseData);
    }

    @PostMapping("/")
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.createOrder(orderRequest));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable int id) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.getOrderById(id));
        return ResponseEntity.ok(responseData);
    }

}
