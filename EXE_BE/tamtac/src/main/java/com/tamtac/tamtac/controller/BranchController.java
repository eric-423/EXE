package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.service.Imp.BranchServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/branches")
public class BranchController {

    @Autowired
    private BranchServiceImp branchServiceImp;

    @GetMapping
    public ResponseEntity<?> getAllBranch(){
        ResponseData responseData = new ResponseData();
        responseData.setData(branchServiceImp.getAllBranch());
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @GetMapping("/distance")
    public ResponseEntity<?> getAllBranchDistance(@RequestParam String destination){
        ResponseData responseData = new ResponseData();
        responseData.setData(branchServiceImp.getAllBranchDistance(destination));
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }



}
