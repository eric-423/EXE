package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.request.CustomerRequest;
import com.tamtac.tamtac.service.Imp.OtpServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/verify-code")
public class VerifyCodeController {

    @Autowired
    private OtpServiceImp otpServiceImp;

    @PostMapping("/send")
    public ResponseEntity<?> sendVerifyCode(@RequestBody CustomerRequest customerRequest, @RequestParam String mode) {
        return ResponseEntity.ok(otpServiceImp.generateOTP(customerRequest.getPhoneNumber(), mode));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(@RequestParam String phoneNumber, @RequestParam String code) {
        return ResponseEntity.ok(otpServiceImp.validateOTP(code, phoneNumber));
    }
}
