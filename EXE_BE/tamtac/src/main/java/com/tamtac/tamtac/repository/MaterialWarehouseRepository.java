package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.MaterialWarehouse;
import com.tamtac.tamtac.entity.keys.KeyMaterialWarehouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaterialWarehouseRepository extends JpaRepository<MaterialWarehouse, KeyMaterialWarehouse> {
    MaterialWarehouse findByKeyMaterialWarehouse(KeyMaterialWarehouse keyMaterialWarehouse);

    List<MaterialWarehouse> findByWarehouse_Branch_Id(int id);


}
