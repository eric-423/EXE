package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.payload.request.InformationRequest;
import com.tamtac.tamtac.service.Imp.InformationServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/information")
public class InformationController {

    @Autowired
    private InformationServiceImp informationServiceImp;

    @GetMapping("/{userId}")
    public ResponseEntity<?> getInformation(@PathVariable int userId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(informationServiceImp.getAllInformation(userId));

        return ResponseEntity.ok(responseData);
    }

    @PostMapping("/{userId}")
    public ResponseEntity<?> createInformation(@PathVariable int userId, @RequestBody InformationRequest informationRequest) {
        ResponseData responseData = new ResponseData();
        responseData.setData(informationServiceImp.createInformation(userId, informationRequest));

        return new ResponseEntity<>(responseData, HttpStatus.CREATED);
    }

    @PutMapping("/{informationId}")
    public ResponseEntity<?> updateInformation(@PathVariable int informationId, @RequestBody InformationRequest informationRequest) {
        ResponseData responseData = new ResponseData();
        responseData.setData(informationServiceImp.updateInformation(informationId, informationRequest));

        return ResponseEntity.ok(responseData);
    }

    @GetMapping("/default")
    public ResponseEntity<?> getInformationDefault(@RequestParam int customerId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(informationServiceImp.getInformationDefault(customerId));

        return ResponseEntity.ok(responseData);
    }

    @DeleteMapping("/{informationId}")
    public ResponseEntity<?> deleteInformation(@PathVariable int informationId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(informationServiceImp.deleteInformation(informationId));

        return ResponseEntity.ok(responseData);
    }
}
