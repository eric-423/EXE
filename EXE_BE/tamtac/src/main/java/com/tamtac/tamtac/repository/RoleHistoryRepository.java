package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.RoleHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleHistoryRepository extends JpaRepository<RoleHistory, Integer>{
    List<RoleHistory> findByUser_IsActiveTrueAndUser_Id(int id);

    List<RoleHistory> findByRole_IdAndBranch_IdAndIsActive(int roleId, int branchId, boolean isActive);


}
