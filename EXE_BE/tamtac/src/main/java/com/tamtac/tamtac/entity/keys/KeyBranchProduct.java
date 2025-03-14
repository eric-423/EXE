package com.tamtac.tamtac.entity.keys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Embeddable
@Data
public class KeyBranchProduct implements Serializable {

    @Column(name = "order_id")
    private int branchId;

    @Column(name = "product_id")
    private int productId;
}
