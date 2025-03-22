package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.UserDTO;
import com.tamtac.tamtac.payload.request.UserRequest;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

public interface UserServiceImp {

    Map<String,Object> signin(String email, String password);

    UserDTO getUserById(int id, String token);

    boolean logout(String token, int userId);

    UserDTO editProfile(int userId, String token, UserRequest userRequest);

    UserDTO createUser(UserRequest userRequest);

    UserDTO editUser(int userId, UserRequest userRequest);

    public Page<UserDTO> getAllUser(boolean isActive,int page, int size, String keyword, int roleId);

    boolean banUser(int userId);

    List<UserDTO> getUserByBranch(int branchId,int roleId);
    }
