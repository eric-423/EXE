package com.tamtac.tamtac.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "branch")
@Data
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "branch_name")
    private String name;

    @Column(name = "branch_address")
    private String address;

    @Column(name = "branch_phone")
    private String phone;

    @Column(name = "is_parent")
    private boolean isParent;

    @Column(name = "is_active")
    private boolean isActive;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    private List<BranchProduct> branchProducts;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    private List<Warehouse> warehouseList;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    private List<Kpi> kpiList;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    private List<Revenue> revenueList;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    private List<Contract> contracts;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE,CascadeType.REFRESH,CascadeType.DETACH})
    private List<Order> orders;

    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    private List<BlackList> blackLists;

}
