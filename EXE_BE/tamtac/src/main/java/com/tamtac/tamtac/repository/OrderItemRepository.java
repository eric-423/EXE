package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.OrderItem;
import com.tamtac.tamtac.entity.keys.KeyOrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, KeyOrderItem> {
}
