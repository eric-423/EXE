package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
    List<Order> findByCustomer_Id(int id);

    List<Order> findByCreatedAtAndStatus_NameAndBranch_Id(Date createdAt, String name, int id);

    List<Order> findByShipper_Id(int id);

    List<Order> findByBranch_IdAndStatus_Id(int id, int id1);

    List<Order> findByBranch_IdAndCreatedAtBetween(int id, Date createdAtStart, Date createdAtEnd);


    List<Order> findByShipper_IdAndStatus_Id(int id, int statusId);


    List<Order> findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(int id, String name, Date createdAt, Date createdAt1);


}
