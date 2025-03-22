package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.ProductRecipes;
import com.tamtac.tamtac.entity.keys.KeyProductRecipes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRecipeRepository extends JpaRepository<ProductRecipes, KeyProductRecipes> {
}
