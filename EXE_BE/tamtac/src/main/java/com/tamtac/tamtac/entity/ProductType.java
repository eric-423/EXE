package com.tamtac.tamtac.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "product_type")
public class ProductType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_type_id")
    private int id;

    @Column(name = "product_type_name")
    private String name;

    @OneToMany(mappedBy = "productType", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE,CascadeType.REFRESH,CascadeType.DETACH})
    private List<Product> products;
}
