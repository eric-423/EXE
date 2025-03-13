package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.entity.Product;
import org.springframework.data.domain.Page;

public interface ProductServiceImp {
    Page<ProductDTO> findAll(String keyword, int typeId, int page, int size);

    Page<ProductDTO> findAllByBranch(String keyword, int typeId, int page, int size, int branchId, int quantityStart, int quantityEnd);
}
