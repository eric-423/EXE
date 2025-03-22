package com.tamtac.tamtac.service;

import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.entity.VerifyCode;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.repository.VerifyCodeRepository;
import com.tamtac.tamtac.service.Imp.OtpServiceImp;
import com.tamtac.tamtac.service.Imp.ZaloServiceImp;
import com.tamtac.tamtac.untils.JwtTokenHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OtpService implements OtpServiceImp {

    private final Random random = new Random();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VerifyCodeRepository verifyCodeRepository;

    @Autowired
    private ZaloServiceImp zaloServiceImp;

    @Autowired
    private JwtTokenHelper jwtTokenHelper;

    @Override
    public String generateOTP(String phoneNumber, String mode) {
        String otp = String.format("%06d", random.nextInt(999999));
        User user = userRepository.findByPhone(phoneNumber);

        if (user != null) {

            if(user.isPhoneVerify()){
                throw new ResourceNotFoundException("Phone number is already verified");
            }
            Calendar calendar = Calendar.getInstance();
            calendar.add(Calendar.MINUTE, 5);
            Date expDate = calendar.getTime();

            VerifyCode verifyCode = new VerifyCode();
            verifyCode.setCode(otp);
            verifyCode.setExpiredAt(expDate);
            verifyCode.setCreatedAt(new Date());
            verifyCode.setUser(user);

            verifyCodeRepository.save(verifyCode);
            if(mode.equals("dev")){
                return otp;
            }
            zaloServiceImp.sendOtp(otp, phoneNumber);
            return otp;
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    @Override
    public Map<String, Object> validateOTP(String otp, String phoneNumber) {
        VerifyCode verifyCode = verifyCodeRepository.findByUser_PhoneAndCode(phoneNumber, otp);

        if (verifyCode != null && verifyCode.getExpiredAt().after(new Date())) {

            User user = verifyCode.getUser();
            user.setPhoneVerify(true);
            verifyCodeRepository.save(verifyCode);

            Map<String, Object>result = new HashMap<>();
            String accessToken = jwtTokenHelper.generateToken(user, 300000L);
            String refreshToken = jwtTokenHelper.generateToken(user, 864000000L);
            result.put("access_token", accessToken);
            result.put("refresh_token", refreshToken );

            user.setRefreshToken(refreshToken);
            userRepository.save(user);
            return result;
        } else {
            throw new ResourceNotFoundException("OTP is invalid or expired");
        }
    }

    @Override
    public void sendOTP(String otp, String email) {

    }
}
