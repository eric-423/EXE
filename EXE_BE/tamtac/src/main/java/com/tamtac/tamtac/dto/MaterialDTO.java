package com.tamtac.tamtac.dto;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@NoArgsConstructor
public class MaterialDTO implements Serializable {
    private int id;
    private String name;
    private double quantity;
}
