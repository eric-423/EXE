package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PromotionRepository extends JpaRepository<Promotion, UUID> {
    List<Promotion> findByUser_Id(int id);

    List<Promotion> findByUser_IdAndStatus(int id, boolean status);

    List<Promotion> findByStatus(boolean status);
}
