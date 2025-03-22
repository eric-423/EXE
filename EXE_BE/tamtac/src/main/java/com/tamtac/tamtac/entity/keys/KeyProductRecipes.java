package com.tamtac.tamtac.entity.keys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class KeyProductRecipes {

    @Column(name = "product_id")
    private int productId;

    @Column(name = "material_id")
    private int materialId;
}
