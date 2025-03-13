package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer>, JpaSpecificationExecutor<Product> {

    List<Product> findByNameContainsAndProductType_IdOrDescriptionContains(String name, int id, String description);

    List<Product> findByProductType_Id(int id);

    List<Product> findByNameContainsAndDescriptionContains(String name, String description);

    List<Product> findByBranchProducts_Branch_IdOrDescriptionContainsOrNameContainsAndBranchProducts_QuantityBetweenAndProductType_Id(int branchId, String description, String name, int quantityStart, int quantityEnd, int productTypeId);

    List<Product> findByBranchProducts_Branch_IdAndBranchProducts_QuantityBetweenAndProductType_Id(int branchId, int quantityStart, int quantityEnd, int productTypeId);

    List<Product> findByBranchProducts_Branch_IdOrDescriptionContainsOrNameContainsAndBranchProducts_QuantityBetween(int branchId, String description, String name, int quantityStart, int quantityEnd);

    List<Product> findByBranchProducts_Branch_Id(int id);

}
