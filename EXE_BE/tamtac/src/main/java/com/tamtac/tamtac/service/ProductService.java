package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.ProductDTO;
import com.tamtac.tamtac.entity.Branch;
import com.tamtac.tamtac.entity.Product;
import com.tamtac.tamtac.entity.keys.KeyBranchProduct;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.repository.BranchProductRepository;
import com.tamtac.tamtac.repository.BranchRepository;
import com.tamtac.tamtac.repository.ProductRepository;
import com.tamtac.tamtac.service.Imp.ProductServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements ProductServiceImp {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private BranchProductRepository branchProductRepository;

    @Override
    public Page<ProductDTO> findAll(String keyword, int typeId, int page, int size) {
        List<Product> products;
        if(!keyword.isEmpty()&&typeId!=0){
            products =  productRepository.findByNameContainsAndProductType_IdOrDescriptionContains(keyword,typeId,keyword);
        } else if(!keyword.isEmpty()){
            products = productRepository.findByNameContainsAndDescriptionContains(keyword,keyword);
        } else if(typeId!=0){
            products = productRepository.findByProductType_Id(typeId);
        } else {
            products = productRepository.findAll();
        }

        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product: products){
            productDTOS.add(convertDTO(product));
        }

        int totalElements = productDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<ProductDTO> subList = productDTOS.subList(start, end);

        Page<ProductDTO> result = new PageImpl<>(subList, PageRequest.of(page, size), totalElements);


        return result;
    }

    @Override
    public Page<ProductDTO> findAllByBranch(String keyword, int typeId, int page, int size, int branchId, int quantityStart, int quantityEnd) {
        List<Product> products;

        if(!keyword.isEmpty()&&typeId!=0){
            products =  productRepository.findByBranchProducts_Branch_IdOrDescriptionContainsOrNameContainsAndBranchProducts_QuantityBetweenAndProductType_Id(branchId,keyword,keyword,quantityStart,quantityEnd,typeId);
        } else if(!keyword.isEmpty()){
            products = productRepository.findByBranchProducts_Branch_IdOrDescriptionContainsOrNameContainsAndBranchProducts_QuantityBetween(branchId,keyword,keyword,quantityStart,quantityEnd);
        } else if(typeId!=0){
            products = productRepository.findByBranchProducts_Branch_IdAndBranchProducts_QuantityBetweenAndProductType_Id(branchId,quantityStart,quantityEnd,typeId);
        } else {
            products = productRepository.findByBranchProducts_Branch_Id(branchId);
        }

        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product: products){
            ProductDTO productDTO = convertDTO(product);

            KeyBranchProduct keyBranchProduct = new KeyBranchProduct();
            keyBranchProduct.setBranchId(branchId);
            keyBranchProduct.setProductId(product.getId());

            productDTO.setProductQuantity(branchProductRepository.findByKeyBranchProduct(keyBranchProduct).getQuantity());

            productDTOS.add(convertDTO(product));
        }

        int totalElements = productDTOS.size();
        int start = Math.min(page * size, totalElements);
        int end = Math.min(start + size, totalElements);
        List<ProductDTO> subList = productDTOS.subList(start, end);

        Page<ProductDTO> result = new PageImpl<>(subList, PageRequest.of(page, size), totalElements);

        return result;
    }

    private ProductDTO convertDTO(Product product){
        ProductDTO productDTO = new ProductDTO();

        productDTO.setProductId(product.getId());
        productDTO.setProductName(product.getName());
        productDTO.setProductDescription(product.getDescription());
        productDTO.setProductPrice(product.getPrice());
        productDTO.setProductType(product.getProductType().getName());
        productDTO.setProductImage(product.getImage());
        return productDTO;
    }
}
