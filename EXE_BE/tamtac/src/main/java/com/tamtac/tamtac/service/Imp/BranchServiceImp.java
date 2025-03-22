package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.BranchDTO;

import java.util.List;
import java.util.Map;


public interface BranchServiceImp {
    List<BranchDTO> getAllBranch();
    List<Map<String,Object>>getAllBranchDistance(String destination);
}
