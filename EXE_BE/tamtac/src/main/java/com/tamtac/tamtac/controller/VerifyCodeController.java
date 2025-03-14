package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.service.Imp.OtpServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/verify-code")
public class VerifyCodeController {

    @Autowired
    private OtpServiceImp otpServiceImp;

    @PostMapping("/send")
    public ResponseEntity<?> sendVerifyCode(@RequestParam String phoneNumber) {
        return ResponseEntity.ok(otpServiceImp.generateOTP(phoneNumber));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(@RequestParam String phoneNumber, @RequestParam String code) {
        return ResponseEntity.ok(otpServiceImp.validateOTP(code, phoneNumber));
    }
}
