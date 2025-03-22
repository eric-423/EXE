package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.request.ProductTypeRequest;
import com.tamtac.tamtac.repository.ProductTypeRepository;
import com.tamtac.tamtac.service.Imp.ProductTypeServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product-type")
public class ProductTypeController {

    @Autowired
    private ProductTypeRepository productTypeRepository;

    @Autowired
    private ProductTypeServiceImp productTypeServiceImp;

    @GetMapping
    public ResponseEntity<?> getAllProductType() {
        return ResponseEntity.ok(productTypeServiceImp.getAllProductType());
    }

    @PostMapping("/admin/create")
    public ResponseEntity<?> createProductType(@RequestBody ProductTypeRequest productTypeRequest) {
        return ResponseEntity.ok(productTypeServiceImp.createProductType(productTypeRequest));
    }

}
