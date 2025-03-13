package com.tamtac.tamtac.payload.request;

import lombok.Data;

import java.util.Date;

@Data
public class OrderItemRequest {
    private Integer productId;
    private Integer quantity;
    private String note;

}
