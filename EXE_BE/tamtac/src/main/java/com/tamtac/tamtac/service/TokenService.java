package com.tamtac.tamtac.service;

import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.service.Imp.TokenServiceImp;
import com.tamtac.tamtac.untils.JwtTokenHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class TokenService implements TokenServiceImp {

    @Autowired
    private JwtTokenHelper jwtTokenHelper;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Map<String, Object> refreshToken(String token) {
        User user= userRepository.findByRefreshToken(token);
        if(user!=null){
            Map<String, Object> result = new HashMap<>();
            long expirationTime = jwtTokenHelper.getExpirationTime(token);
            String accessToken = jwtTokenHelper.generateToken(user, 300000L);
            String refreshToken = jwtTokenHelper.generateToken(user, expirationTime);
            user.setRefreshToken(refreshToken);
            userRepository.save(user);
            result.put("access_token", accessToken);
            result.put("refresh_token", refreshToken);
            return result;
        } else{
            throw new RuntimeException("Token is invalid");
        }
    }


}
