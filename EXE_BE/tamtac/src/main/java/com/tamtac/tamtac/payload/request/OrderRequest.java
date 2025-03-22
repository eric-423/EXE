package com.tamtac.tamtac.payload.request;

import lombok.Data;

import java.util.List;

@Data
public class OrderRequest {
    private int customerId;
    private String promotionCode;
    private String note;
    private boolean isPickUp;
    private String address;
    private String phoneNumber;
    private int branchId;
    private int pointUsed;
    private int pointEarned;
    private int paymentMethodId;
    private String longitude;
    private String latitude;
    List<OrderItemRequest> orderItems;
}
