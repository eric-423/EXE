package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.CustomerDTO;
import com.tamtac.tamtac.entity.Role;
import com.tamtac.tamtac.entity.RoleHistory;
import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.payload.request.CustomerRequest;
import com.tamtac.tamtac.payload.request.LoginCustomerRequest;
import com.tamtac.tamtac.repository.RoleHistoryRepository;
import com.tamtac.tamtac.repository.RoleRepository;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.service.Imp.CustomerServiceImp;
import com.tamtac.tamtac.untils.JwtTokenHelper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class CustomerService implements CustomerServiceImp {


    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleHistoryRepository roleHistoryRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Value("${jwt.secretkey}")
    private String key;
    @Autowired
    private JwtTokenHelper jwtTokenHelper;

    @Override
    public CustomerDTO createCustomer(LoginCustomerRequest loginCustomerRequest) {

        if (userRepository.findByPhone(loginCustomerRequest.getPhoneNumber()) != null) {
            throw new RuntimeException("Phone number is already exist");
        }

        User user = new User();
        user.setPhoneVerify(false);
        user.setPhone(loginCustomerRequest.getPhoneNumber());
        userRepository.save(user);

        Role role = roleRepository.findByName("CUSTOMER");
        RoleHistory roleHistory = new RoleHistory();
        roleHistory.setStartDate(new Date());
        roleHistory.setActive(true);
        roleHistory.setRole(role);
        roleHistory.setUser(user);
        roleHistoryRepository.save(roleHistory);

        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setPhoneNumber(user.getPhone());
        return customerDTO;
    }

    @Override
    public boolean changePassword(CustomerRequest customerRequest, String token) {
        User user = userRepository.findByPhone(customerRequest.getPhoneNumber());
        if (user == null) {
            throw new RuntimeException("Phone number is not exist");
        }

        String tokenFinal = token.replace("Bearer ", "");
        Claims claims;
        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));

        try {
            claims = Jwts.parser()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(tokenFinal)
                    .getBody();
            int id = (int) claims.get("id");
            if (id != user.getId()) throw new RuntimeException("Token is invalid");
        } catch (Exception e) {
            throw new RuntimeException("Token is invalid");
        }

        user.setPassword(passwordEncoder.encode(customerRequest.getPassword()));
        userRepository.save(user);
        return true;
    }

    @Override
    public Map<String, Object> loginCustomer(LoginCustomerRequest loginCustomerRequest) {
        User user = userRepository.findByPhone(loginCustomerRequest.getPhoneNumber());
        if (user == null) {
            throw new RuntimeException("Phone number is not exist");
        }
        if(!passwordEncoder.matches(loginCustomerRequest.getPassword(), user.getPassword())){
            throw new RuntimeException("Password is incorrect");
        }

        Map<String, Object>result = new HashMap<>();
        String accessToken = jwtTokenHelper.generateToken(user,300000);
        String refreshToken = jwtTokenHelper.generateToken(user,864000000);
        result.put("access_token", accessToken);
        result.put("refresh_token", refreshToken );

        return result;
    }
}
