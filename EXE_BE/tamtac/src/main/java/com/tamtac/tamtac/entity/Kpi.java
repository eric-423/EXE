package com.tamtac.tamtac.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "kpi")
@Data
@NoArgsConstructor
public class Kpi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kpi_id")
    private int id;

    @Column(name = "kpi_date")
    private Date date;

    @Column(name = "kpi_amount")
    private double amount;

    @Column(name = "kpi_target")
    private double target;

    @Column(name = "kpi_status")
    private boolean status;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "branch_id")
    private Branch branch;
}
