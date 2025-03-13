package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
    List<Order> findByCustomer_Id(int id);

}
