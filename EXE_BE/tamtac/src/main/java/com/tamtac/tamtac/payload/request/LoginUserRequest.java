package com.tamtac.tamtac.payload.request;

import lombok.Data;

@Data
public class LoginUserRequest {
    private String email;
    private String password;
}
