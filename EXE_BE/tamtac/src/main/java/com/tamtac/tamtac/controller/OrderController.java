package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.payload.request.OrderRequest;
import com.tamtac.tamtac.service.Imp.OrderServiceImp;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderServiceImp orderServiceImp;

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<?> getAllOrdersByCustomer(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @PathVariable int customerId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.findByCustomerId(customerId, page, size));
        return ResponseEntity.ok(responseData);
    }

    @PostMapping("/")
    public ResponseEntity<?> createOrder(HttpServletRequest request, @RequestBody OrderRequest orderRequest) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.createOrder(request, orderRequest));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable int id) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.getOrderById(id));
        return ResponseEntity.ok(responseData);
    }

    @PutMapping("/delivered/{orderId}")
    public ResponseEntity<?> updateDeliveredStatus(@PathVariable int orderId, @RequestParam int shipperId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.changeToDelivered(orderId, shipperId));
        return ResponseEntity.ok(responseData);
    }

    @PutMapping("/delivery/{orderId}")
    public ResponseEntity<?> updateDeliveryStatus(@PathVariable int orderId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.changeToDelivery(orderId));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/metric/AI/{branchId}")
    public ResponseEntity<?> callOrderMetricForAI(@RequestParam() Date startDate, @RequestParam Date endDate, @PathVariable int branchId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.callOrderMetricForAI(startDate,endDate,branchId));
        return ResponseEntity.ok(responseData);
    }

    @PutMapping("/inprocess/{orderId}")
    public ResponseEntity<?> updateInProcessStatus(@PathVariable int orderId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.changeToInProcess(orderId));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/shipper/{shipperId}")
    public ResponseEntity<?> getOrdersForShipper(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @PathVariable int shipperId, @RequestParam(defaultValue = "2") int statusId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.findOrderForShipper(shipperId, statusId, page, size));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<?> getOrdersInBranchByStatus(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @PathVariable int branchId, @RequestParam int statusId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.findOrderInBranchByStatus(branchId, statusId, page, size));
        return ResponseEntity.ok(responseData);
    }




    @PutMapping("/cancel/{orderId}")
    public ResponseEntity<?> updateStatus(@PathVariable int orderId, @RequestHeader("Authorization") String token, @RequestParam int customerId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.cancelOrder(orderId, token, customerId));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/status/{orderId}")
    public ResponseEntity<?> getOrderStatus(@PathVariable int orderId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(orderServiceImp.getOrderStatusWithRealTime(orderId));
        return ResponseEntity.ok(responseData);
    }

}
