package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.OrderDTO;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;

public interface AiServiceImp {
    Map<String,Object> getMetricFromAI(String orderDetailOfBranch);
}
