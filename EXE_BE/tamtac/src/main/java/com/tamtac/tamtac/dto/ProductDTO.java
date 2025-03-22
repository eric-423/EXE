package com.tamtac.tamtac.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class ProductDTO implements Serializable {
    private int productId;
    private String productName;
    private String productDescription;
    private String productImage;
    private double productPrice;
    private String productType;
    private int productQuantity;
}
