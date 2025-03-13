package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentMethodrepository extends JpaRepository<PaymentMethod,Integer> {

}
