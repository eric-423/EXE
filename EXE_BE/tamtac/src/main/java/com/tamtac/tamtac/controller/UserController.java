package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.payload.request.UserRequest;
import com.tamtac.tamtac.service.Imp.UserServiceImp;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServiceImp userServiceImp;

    @RequestMapping("/profile/{id}")
    public ResponseEntity<?> getAllUsers(@PathVariable int id, @RequestHeader("Authorization") String token){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.getUserById(id, token));
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestParam String email, @RequestParam String password){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.signin(email, password));
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PutMapping("/profile/{id}")
    public ResponseEntity<?> editProfile(@PathVariable int userId, @RequestHeader("Authorization") String token, @RequestBody UserRequest user){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.editProfile(userId, token, user));
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @PostMapping("logout/{userId}")
    public ResponseEntity<?> logout(@RequestHeader("Authorization") String token, @PathVariable int userId){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.logout(token,userId));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<?> getUserByBranch(@RequestParam int roleId, @PathVariable int branchId){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.getUserByBranch(branchId,roleId));
        return ResponseEntity.ok(responseData);
    }


    @PostMapping("/admin/create")
    public ResponseEntity<?> createUser(@RequestBody UserRequest userRequest){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.createUser(userRequest));
        return ResponseEntity.ok(responseData);
    }

    @PutMapping("/admin/edit/{id}")
    public ResponseEntity<?> editUser(@PathVariable int userId, @RequestBody UserRequest userRequest){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.editUser(userId, userRequest));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/admin/get-all-user")
    public ResponseEntity<?> getAllUser(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,@RequestParam(defaultValue = "true") boolean isActive, @RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "0") int roleId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.getAllUser(isActive,page,size,keyword,roleId));
        return ResponseEntity.ok(responseData);
    }

    @PutMapping("/admin/ban/{id}")
    public ResponseEntity<?> banUser(@PathVariable int userId){
        ResponseData responseData = new ResponseData();
        responseData.setData(userServiceImp.banUser(userId));
        return ResponseEntity.ok(responseData);
    }

}
