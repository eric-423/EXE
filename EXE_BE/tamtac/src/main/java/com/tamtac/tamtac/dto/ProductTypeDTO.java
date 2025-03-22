package com.tamtac.tamtac.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class ProductTypeDTO implements Serializable {
    private Integer id;
    private String name;
}
