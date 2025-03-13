package com.tamtac.tamtac.dto;


import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class CustomerDTO implements Serializable {

    private int id;

    private String fullName;

    private String email;

    private String phone;

    private String address;

    private boolean isActive;

    private String dateOfBirth;

    private Date createdAt;

    private int memberPoint;

    private String memberRank;
}
