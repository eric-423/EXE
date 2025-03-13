package com.tamtac.tamtac.payload.request;

import jakarta.persistence.Id;
import lombok.Data;

@Data
public class LoginCustomerRequest {
    private String phoneNumber;
    private String password;
}
