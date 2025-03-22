package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.dto.ProductTypeDTO;
import com.tamtac.tamtac.entity.ProductType;
import com.tamtac.tamtac.payload.request.ProductTypeRequest;
import com.tamtac.tamtac.repository.ProductTypeRepository;
import com.tamtac.tamtac.service.Imp.ProductTypeServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductTypeService implements ProductTypeServiceImp {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    @Override
    public List<ProductTypeDTO> getAllProductType() {
        List<ProductTypeDTO> result = new ArrayList<>();
        List<ProductType> productTypes = productTypeRepository.findAll();
        for(ProductType productType:productTypes){
            result.add(transferDTO(productType));
        }
        return result;
    }

    @Override
    public ProductTypeDTO createProductType(ProductTypeRequest productTypeRequest) {
        ProductType productType = new ProductType();
        productType.setName(productTypeRequest.getName());
        productTypeRepository.save(productType);
        return transferDTO(productType);
    }

    private ProductTypeDTO transferDTO(ProductType productType){
        ProductTypeDTO productTypeDTO = new ProductTypeDTO();
        productTypeDTO.setId(productType.getId());
        productTypeDTO.setName(productType.getName());

        return productTypeDTO;

    }

}
