package com.tamtac.tamtac.payload.request;

import lombok.Data;

@Data
public class InformationRequest {
    private Integer userId;
    private String fullName;
    private String address;
    private String phone;
    private Boolean isDefault;
}
