package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Information;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InformationRepository extends JpaRepository<Information, Integer> {
    List<Information> findByUser_IdAndIsDefaultTrue(int userId);

}
