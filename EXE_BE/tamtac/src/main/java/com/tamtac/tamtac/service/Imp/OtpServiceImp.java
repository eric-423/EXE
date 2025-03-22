package com.tamtac.tamtac.service.Imp;

import java.util.Map;

public interface OtpServiceImp {
     String generateOTP(String phoneNumber, String mode);
     Map<String,Object> validateOTP(String otp, String phoneNumber);
     void sendOTP(String otp, String email);
}
