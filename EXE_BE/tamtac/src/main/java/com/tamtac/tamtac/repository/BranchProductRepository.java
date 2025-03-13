package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.Branch;
import com.tamtac.tamtac.entity.BranchProduct;
import com.tamtac.tamtac.entity.keys.KeyBranchProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BranchProductRepository extends JpaRepository<BranchProduct, Integer>{
    BranchProduct findByKeyBranchProduct(KeyBranchProduct keyBranchProduct);

}
