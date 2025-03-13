package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.service.Imp.ProductServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductServiceImp productServiceImp;

    @GetMapping
    public ResponseEntity<?> getAllProducts(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "0") int typeId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(productServiceImp.findAll(keyword, typeId, page, size));
        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/branch/{branchId}")
    public ResponseEntity<?> getAllProductsByBranch(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "0") int typeId, @RequestParam(defaultValue = "0") int branchId, @RequestParam(defaultValue = "0") int quantityStart, @RequestParam(defaultValue = "0") int quantityEnd) {
        ResponseData responseData = new ResponseData();
        responseData.setData(productServiceImp.findAllByBranch(keyword, typeId, page, size, branchId, quantityStart, quantityEnd));
        return ResponseEntity.ok(responseData);
    }

}
