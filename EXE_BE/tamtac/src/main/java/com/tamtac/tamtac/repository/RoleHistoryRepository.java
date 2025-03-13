package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.RoleHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleHistoryRepository extends JpaRepository<RoleHistory, Integer>{
}
