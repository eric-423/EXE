package com.tamtac.tamtac.payload.request;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class CustomerRequest {
    private String name;
    private String phoneNumber;
    private String password;
    private String address;
}
