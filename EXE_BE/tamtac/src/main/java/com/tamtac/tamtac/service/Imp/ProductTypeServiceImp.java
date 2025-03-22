package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.ProductTypeDTO;
import com.tamtac.tamtac.payload.request.ProductTypeRequest;

import java.util.List;

public interface ProductTypeServiceImp {
    List<ProductTypeDTO> getAllProductType();
    ProductTypeDTO createProductType(ProductTypeRequest productTypeRequest);
}
