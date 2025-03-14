package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.CustomerDTO;
import com.tamtac.tamtac.payload.request.CustomerRequest;
import com.tamtac.tamtac.payload.request.LoginCustomerRequest;

import java.util.Map;

public interface CustomerServiceImp {
    CustomerDTO createCustomer(LoginCustomerRequest loginCustomerRequest);
    boolean changePassword(CustomerRequest customerRequest, String token);
    public Map<String, Object> loginCustomer(LoginCustomerRequest loginCustomerRequest);
}
