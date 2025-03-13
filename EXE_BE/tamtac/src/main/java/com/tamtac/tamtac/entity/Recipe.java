package com.tamtac.tamtac.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "recipe")
@Data
@NoArgsConstructor
public class Recipe {
    @Column(name = "recipe_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "recipe_name")
    private String name;

    @Column(name = "recipe_ingredient")
    private String ingredient;

    @Column(name = "recipe_instructions")
    private String instructions;

    @Column(name = "created_date")
    private Date createdDate;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
