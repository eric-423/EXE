package com.tamtac.tamtac.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Table(name = "revenue")
@Data
@NoArgsConstructor
public class Revenue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revenue_id")
    private int id;

    @Column(name = "revenue_amount")
    private float amount;

    @Column(name = "revenue_date")
    private Date date;

    @Column(name = "revenue_status")
    private boolean status;

    @Column(name = "revenue_target")
    private double target;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "branch_id")
    private Branch branch;
}
