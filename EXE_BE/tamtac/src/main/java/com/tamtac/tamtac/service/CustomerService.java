package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.CustomerDTO;
import com.tamtac.tamtac.dto.UserDTO;
import com.tamtac.tamtac.entity.Role;
import com.tamtac.tamtac.entity.RoleHistory;
import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.entity.VerifyCode;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.request.CustomerRequest;
import com.tamtac.tamtac.payload.request.LoginCustomerRequest;
import com.tamtac.tamtac.repository.*;
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
import java.util.List;
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
    @Autowired
    private VerifyCodeRepository verifyCodeRepository;

    @Autowired
    private MemberAssociationRepository memberAssociationRepository;

    @Override
    public CustomerDTO createCustomer(LoginCustomerRequest loginCustomerRequest) {

        if (userRepository.findByPhone(loginCustomerRequest.getPhoneNumber()) != null) {
            throw new RuntimeException("Phone number is already exist");
        }

        User user = new User();
        user.setPhoneVerify(false);
        user.setPhone(loginCustomerRequest.getPhoneNumber());
        user.setActive(true);
        user.setMemberPoint(0);
        user.setMemberAssociation(memberAssociationRepository.findById(1).orElseThrow(() -> new ResourceNotFoundException("Member association not found")));
        userRepository.save(user);

        Role role = roleRepository.findByName("CUSTOMER");
        RoleHistory roleHistory = new RoleHistory();
        roleHistory.setStartDate(new Date());
        roleHistory.setActive(true);
        roleHistory.setRole(role);
        roleHistory.setUser(user);
        roleHistoryRepository.save(roleHistory);

        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setPhone(user.getPhone());
        return customerDTO;
    }

    private void checkValidCustomer(String token, int customerId) {
        User user = userRepository.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));

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
    }

    @Override
    public boolean changePassword(String token, String password) {
        int id = 0;
        String tokenFinal = token.replace("Bearer ", "");
        Claims claims;
        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));

        try {
            claims = Jwts.parser()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(tokenFinal)
                    .getBody();
            id = (int) claims.get("id");
        } catch (Exception e) {
            throw new RuntimeException("Token is invalid");
        }
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
        return true;
    }

    @Override
    public Map<String, Object> loginCustomer(LoginCustomerRequest loginCustomerRequest) {
        User user = userRepository.findByPhone(loginCustomerRequest.getPhoneNumber());
        if (user == null) {
            throw new RuntimeException("Phone number is not exist");
        }
        if (!passwordEncoder.matches(loginCustomerRequest.getPassword(), user.getPassword())) {
            throw new RuntimeException("Password is incorrect");
        }

        Map<String, Object> result = new HashMap<>();
        String accessToken = jwtTokenHelper.generateToken(user, 300000L);
        String refreshToken = jwtTokenHelper.generateToken(user, 864000000L);
        result.put("access_token", accessToken);
        result.put("refresh_token", refreshToken);

        user.setRefreshToken(refreshToken);
        userRepository.save(user);

        return result;
    }

    @Override
    public CustomerDTO getProfile(int id, String token) {

        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        checkValidCustomer(token, user.getId());

        return toDTO(user);
    }

    @Override
    public boolean deleteCustomer(String phoneNumber) {
        try {
            User user = userRepository.findByPhone(phoneNumber);
            VerifyCode verifyCode = user.getVerifyCode();
            verifyCodeRepository.delete(verifyCode);
            List<RoleHistory> roleHistoryList = user.getRoleHistories();
            roleHistoryRepository.delete(roleHistoryList.getFirst());
            userRepository.delete(user);
            return true;
        }catch (Exception e){
            throw new RuntimeException("Error deleting customer");
        }
    }

    @Override
    public CustomerDTO updateCustomer(int id,String token, CustomerRequest customerRequest) {
        try{
            User user = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Customer not found"));
            user.setFullName(customerRequest.getName());
            if(userRepository.findByPhone(customerRequest.getPhoneNumber()).getId() == user.getId() || userRepository.findByPhone(customerRequest.getPhoneNumber()) != null){
                throw new RuntimeException("Phone number is already exist");
            }
            user.setPhone(customerRequest.getPhoneNumber());
            user.setAddress(customerRequest.getAddress());
            userRepository.save(user);
            return toDTO(user);
        }catch (Exception e){
            throw new RuntimeException("Error update customer: " + e.getMessage(), e);
        }
    }

    public CustomerDTO toDTO(User user){

        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setId(user.getId());
        if(user.getFullName()!=null){
            customerDTO.setFullName(user.getFullName());
        }
        if(user.getEmail()!=null){
            customerDTO.setEmail(user.getEmail());
        }
        customerDTO.setPhone(user.getPhone());
        if(user.getAddress()!=null){
            customerDTO.setAddress(user.getAddress());
        }

        if(user.getDateOfBirth()!=null) {
            customerDTO.setDateOfBirth(user.getDateOfBirth());
        }
        customerDTO.setCreatedAt(user.getCreatedAt());
        customerDTO.setMemberPoint(user.getMemberPoint());
        customerDTO.setMemberRank(user.getMemberAssociation().getName());

        return customerDTO;
    }
}
