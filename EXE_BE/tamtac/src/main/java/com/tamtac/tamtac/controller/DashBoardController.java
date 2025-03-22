package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.service.DashboardService;
import com.tamtac.tamtac.service.Imp.DashboardServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/dashboard")
public class DashBoardController {

    @Autowired
    private DashboardServiceImp dashboardServiceImp;


    @GetMapping("/metrics")
    public ResponseEntity<?> getDashboardMetric(@RequestParam int branchId, @RequestParam Date startDate, @RequestParam Date endDate) {

        ResponseData responseData = new ResponseData();
        responseData.setData(dashboardServiceImp.getMetrics(branchId, startDate, endDate));
        return ResponseEntity.ok(responseData);
    }
}
