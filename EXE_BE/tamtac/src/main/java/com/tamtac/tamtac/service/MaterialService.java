package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.MaterialDTO;
import com.tamtac.tamtac.dto.UserDTO;
import com.tamtac.tamtac.entity.Branch;
import com.tamtac.tamtac.entity.Material;
import com.tamtac.tamtac.entity.MaterialWarehouse;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.repository.BranchRepository;
import com.tamtac.tamtac.repository.MaterialWarehouseRepository;
import com.tamtac.tamtac.service.Imp.MaterialServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MaterialService implements MaterialServiceImp {

    @Autowired
    private MaterialWarehouseRepository materialWarehouseRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Override
    public Page<MaterialDTO> getAllMaterialOfBranch(int branchId, int page, int size) {
        List<MaterialWarehouse> materialWarehouses = materialWarehouseRepository.findByWarehouse_Branch_Id(branchId);
        List<MaterialDTO> materialDTOS = new ArrayList<>();

        for(MaterialWarehouse materialWarehouse : materialWarehouses){
            MaterialDTO materialDTO = new MaterialDTO();
            Material material = materialWarehouse.getMaterial();
            materialDTO.setId(material.getId());
            materialDTO.setName(material.getName());
            materialDTO.setQuantity(materialWarehouse.getQuantity());
            materialDTOS.add(materialDTO);
        }

        int totalElements = materialDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<MaterialDTO> subList = materialDTOS.subList(start, end);

        return new PageImpl<>(subList, PageRequest.of(page, size), totalElements);
    }
}
