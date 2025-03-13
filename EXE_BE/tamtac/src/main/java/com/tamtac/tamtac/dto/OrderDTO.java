package com.tamtac.tamtac.dto;

import com.tamtac.tamtac.entity.OrderItem;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
public class OrderDTO implements Serializable {

    private Integer id;

    private Double subTotal;

    private String promotionCode;

    private Double discountValue;

    private Integer discountPercent;

    private Double amount;

    private Double shipping_fee;

    private Boolean isPickUp;

    private Date delivery_at;

    private String note;

    private String payment_code;

    private String address;

    private String phone;

    private Integer pointUsed;

    private Integer pointEarned;

    private Date createdAt;

    private List<OrderIemDTO> orderItems;

}
