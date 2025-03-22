package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.MaterialDTO;
import org.springframework.data.domain.Page;

public interface MaterialServiceImp {
    Page<MaterialDTO> getAllMaterialOfBranch(int branchId, int page, int size);
}
