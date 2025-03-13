package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PromotionRepository extends JpaRepository<Promotion, UUID> {
}
