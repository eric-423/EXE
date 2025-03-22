package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.BranchDTO;
import com.tamtac.tamtac.entity.Branch;
import com.tamtac.tamtac.repository.BranchRepository;
import com.tamtac.tamtac.service.Imp.BranchServiceImp;
import com.tamtac.tamtac.service.Imp.GoogleMapApiServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BranchService implements BranchServiceImp {

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private GoogleMapApiServiceImp googleMapApiServiceImp;

    @Override
    public List<BranchDTO> getAllBranch() {
        List<Branch> branches = branchRepository.findAll();
        List<BranchDTO> result = new ArrayList<>();

        for(Branch branch : branches){
            result.add(toDTO(branch));
        }
        return result;
    }

    public List<Map<String,Object>>getAllBranchDistance(String destination){
        List<Branch> branches = branchRepository.findAll();
        List<Map<String,Object>> distances = googleMapApiServiceImp.getDistance(branches,destination);

        Collections.sort(distances, new Comparator<Map<String, Object>>() {
            @Override
            public int compare(Map<String, Object> o1, Map<String, Object> o2) {
                int distance1 = (int) o1.get("value");
                int distance2 = (int) o2.get("value");
                return Integer.compare(distance1, distance2);
            }
        });

        List<Map<String,Object>> result = new ArrayList<>();
        for(Map<String,Object> distance : distances){
            Branch branch = (Branch) distance.get("branch");
            BranchDTO branchDTO = toDTO(branch);
            Map<String,Object> data = new HashMap<>();
            data.put("branch",branchDTO);
            data.put("distance",distance.get("value"));
            result.add(data);
        }
        return result;
    }


    private BranchDTO toDTO(Branch Branch){
        BranchDTO branchDTO = new BranchDTO();
        branchDTO.setId(Branch.getId());
        branchDTO.setName(Branch.getName());
        branchDTO.setAddress(Branch.getAddress());
        branchDTO.setPhone(Branch.getPhone());
        branchDTO.setParent(Branch.isParent());
        branchDTO.setActive(Branch.isActive());
        return branchDTO;
    }
}
