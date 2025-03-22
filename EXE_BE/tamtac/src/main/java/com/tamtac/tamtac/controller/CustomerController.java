package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.payload.request.CustomerRequest;
import com.tamtac.tamtac.payload.request.LoginCustomerRequest;
import com.tamtac.tamtac.service.Imp.CustomerServiceImp;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerServiceImp customerServiceImp;

    @PostMapping("/sign-up")
    @Operation(summary = "Create Customer Account", description = "Just only field phoneNumber")
    public ResponseEntity<?> createCustomer(@RequestBody LoginCustomerRequest loginCustomerRequest) {
        ResponseData responseData = new ResponseData();
        responseData.setData(customerServiceImp.createCustomer(loginCustomerRequest));
        return ResponseEntity.ok(responseData);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateCustomer(@PathVariable int id,@RequestBody CustomerRequest customerRequest, @RequestHeader("Authorization") String token){
        ResponseData responseData = new ResponseData();
        responseData.setData(customerServiceImp.updateCustomer(id, token, customerRequest));
        return ResponseEntity.ok(responseData);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<?> signIn(@RequestBody LoginCustomerRequest loginCustomerRequest) {
        ResponseData responseData = new ResponseData();
        responseData.setData(customerServiceImp.loginCustomer(loginCustomerRequest));
        return ResponseEntity.ok(responseData);
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody CustomerRequest customerRequest, @RequestHeader("Authorization") String token){
        ResponseData responseData = new ResponseData();
        responseData.setData(customerServiceImp.changePassword(token, customerRequest.getPassword()));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getProfile(@PathVariable int id, @RequestHeader("Authorization") String token){
        ResponseData responseData = new ResponseData();
        responseData.setData(customerServiceImp.getProfile(id, token));
        return ResponseEntity.ok(responseData);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteCustomer(@RequestParam String phoneNumber){
        ResponseData responseData = new ResponseData();
        responseData.setData(customerServiceImp.deleteCustomer(phoneNumber));
        return ResponseEntity.ok(responseData);
    }


}
