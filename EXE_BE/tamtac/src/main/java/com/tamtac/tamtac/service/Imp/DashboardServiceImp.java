package com.tamtac.tamtac.service.Imp;

import java.util.Date;
import java.util.Map;

public interface DashboardServiceImp {
    Map<String, Object> getMetrics(int branchId, Date startDate, Date endDate);

    Map<String,Object> getAmountOfOrderPickUpAndShip(int branchId, Date startDate, Date endDate);
}

