package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.entity.Branch;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

public interface GoogleMapApiServiceImp {
    List<Map<String, Object>> getDistance(List<Branch> branchList, String destination);
}
