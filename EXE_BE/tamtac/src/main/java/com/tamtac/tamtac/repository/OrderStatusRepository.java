package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatus,Integer> {
    OrderStatus findByName(String name);

}
