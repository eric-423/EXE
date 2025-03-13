package com.tamtac.tamtac.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class OrderIemDTO implements Serializable {
    private int productId;
    private int orderId;
    private int quantity;
    private double price;
    private String note;
    private String feedback;
    private boolean isFeedBackYet;
    private int feedbackPoint;
    private Date expiredFeedbackTime;
}
