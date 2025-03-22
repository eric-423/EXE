package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.dto.UserDTO;
import com.tamtac.tamtac.entity.Role;
import com.tamtac.tamtac.entity.RoleHistory;
import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.request.UserRequest;
import com.tamtac.tamtac.repository.RoleHistoryRepository;
import com.tamtac.tamtac.repository.RoleRepository;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.service.Imp.UserServiceImp;
import com.tamtac.tamtac.untils.JwtTokenHelper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import javax.crypto.SecretKey;
import java.util.*;

@Service
public class UserService implements UserServiceImp {

    @Autowired
    UserRepository userRepository;
    @Value("${jwt.secretkey}")
    private String key;
    @Autowired
    private RoleHistoryRepository roleHistoryRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtTokenHelper jwtTokenHelper;


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
    public Map<String, Object> signin(String email, String password) {
        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("User not found");
        }
        Map<String, Object> result = new HashMap<>();
        if(passwordEncoder.matches(password,user.getPassword())){
            if(!user.isPhoneVerify()){
                throw new RuntimeException("Phone is not verified");
            }
            if(!user.isEmailVerify()){
                throw new RuntimeException("Email is not verified");
            }
            String accessToken = jwtTokenHelper.generateToken(user, 300000L);
            String refreshToken = jwtTokenHelper.generateToken(user, 864000000L);
            result.put("access_token", accessToken);
            result.put("refresh_token", refreshToken);
        }else{
            throw new RuntimeException("Password is incorrect");
        }
        return result;
    }

    @Override
    public UserDTO getUserById(int id, String token) {
        checkValidCustomer(token, id);
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return convertToUserDTO(user);
    }

    private UserDTO convertToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setFullName(user.getFullName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPhone(user.getPhone());
        userDTO.setDateOfBirth(user.getDateOfBirth());
        userDTO.setCreatedAt(user.getCreatedAt());
        userDTO.setRole(findRoleActive(user).getRole().getName());
        userDTO.setBranchId(findRoleActive(user).getBranch().getId());
        System.out.println("hihihi");
        return userDTO;
    }

    private RoleHistory findRoleActive(User user){
        List<RoleHistory> roleHistories = user.getRoleHistories();
        for (RoleHistory roleHistory : roleHistories) {
            if(roleHistory.isActive()){
                return roleHistory;
            }
        }
        return null;
    }

    @Override
    public boolean logout(String token, int userId) {
        checkValidCustomer(token, userId);

        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        user.setRefreshToken(null);
        userRepository.save(user);
        return true;
    }

    @Override
    public UserDTO editProfile(int userId, String token, UserRequest userRequest) {
        checkValidCustomer(token, userId);

        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        user.setFullName(userRequest.getFullName());
        user.setPhone(userRequest.getPhone());
        user.setEmail(userRequest.getEmail());
        user.setDateOfBirth(userRequest.getDateOfBirth());

        userRepository.save(user);
        return convertToUserDTO(user);
    }


    @Override
    @Transactional
    public UserDTO createUser(UserRequest userRequest) {
        User user = new User();
        user.setFullName(userRequest.getFullName());
        user.setPassword(userRequest.getPassword());
        user.setEmail(userRequest.getEmail());
        user.setPhone(userRequest.getPhone());
        user.setActive(true);
        user.setDateOfBirth(userRequest.getDateOfBirth());
        user.setNote("");
        user.setCreatedAt(new Date());
        user.setEmailVerify(false);
        user.setPhoneVerify(false);
        user.setRefreshToken("");
        userRepository.save(user);

        RoleHistory roleHistory = new RoleHistory();
        roleHistory.setRole(roleRepository.findById(userRequest.getRoleId()).orElseThrow(() -> new ResourceNotFoundException("Role not found")));
        roleHistory.setUser(user);
        roleHistory.setActive(true);
        roleHistoryRepository.save(roleHistory);
        List<RoleHistory> roleHistories = new ArrayList<>();
        roleHistories.add(roleHistory);
        user.setRoleHistories(roleHistories);


        return convertToUserDTO(user);
    }

    @Override
    public UserDTO editUser(int userId, UserRequest userRequest) {

        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        user.setFullName(userRequest.getFullName());
        user.setPhone(userRequest.getPhone());
        user.setEmail(userRequest.getEmail());
        user.setDateOfBirth(userRequest.getDateOfBirth());

        RoleHistory roleHistory = findRoleActive(user);
        roleHistory.setEndDate(new Date());
        roleHistory.setActive(false);
        roleHistoryRepository.save(roleHistory);

        RoleHistory newRoleHistory = new RoleHistory();
        newRoleHistory.setUser(user);
        newRoleHistory.setRole(roleRepository.findById(userRequest.getRoleId()).orElseThrow(() -> new ResourceNotFoundException("Role not found")));
        newRoleHistory.setStartDate(new Date());
        newRoleHistory.setActive(true);
        roleHistoryRepository.save(roleHistory);
        List<RoleHistory> roleHistories = user.getRoleHistories();
        roleHistories.add(newRoleHistory);
        user.setRoleHistories(roleHistories);
        userRepository.save(user);

        return convertToUserDTO(user);
    }

    @Override
    public Page<UserDTO> getAllUser(boolean isActive, int page, int size, String keyword, int roleId) {
        List<UserDTO> userDTOS = new ArrayList<>();
        List<User> users;
        if (roleId != 0) {
            users = userRepository.findByFullNameContainsIgnoreCaseOrEmailContainsIgnoreCaseOrPhoneContainsIgnoreCaseAndIsActiveAndRoleHistories_Role_IdAndRoleHistories_IsActiveTrue(keyword, keyword, keyword, isActive, roleId);
        } else {
            users = userRepository.findByFullNameContainsIgnoreCaseOrEmailContainsIgnoreCaseOrPhoneContainsIgnoreCaseAndIsActive(keyword, keyword, keyword, isActive);
        }

        for (User user : users) {
            userDTOS.add(convertToUserDTO(user));
        }

        int totalElements = userDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<UserDTO> subList = userDTOS.subList(start, end);

        Page<UserDTO> result = new PageImpl<>(subList, PageRequest.of(page, size), totalElements);


        return result;
    }

    @Override
    public boolean banUser(int userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        user.setActive(false);
        userRepository.save(user);
        return true;
    }

    @Override
    public List<UserDTO> getUserByBranch(int branchId, int roleId) {
        List<RoleHistory> roleHistories = roleHistoryRepository.findByRole_IdAndBranch_IdAndIsActive(roleId,branchId,true);
        List<User> users = new ArrayList<>();

        for(RoleHistory roleHistory : roleHistories){
            users.add(roleHistory.getUser());
        }

        List<UserDTO> userDTOS = new ArrayList<>();
        for (User user : users) {
            userDTOS.add(convertToUserDTO(user));
        }


        return userDTOS;
    }


}
