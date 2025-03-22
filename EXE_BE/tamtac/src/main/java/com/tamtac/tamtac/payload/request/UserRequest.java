package com.tamtac.tamtac.payload.request;

import lombok.Data;

import java.util.Date;

@Data
public class UserRequest {
    private String fullName;
    private String email;
    private String phone;
    private String dateOfBirth;
    private String password;
    private Integer roleId;
    private Integer branchId;
}
