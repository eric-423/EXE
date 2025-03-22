package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.CustomerDTO;
import com.tamtac.tamtac.payload.request.CustomerRequest;
import com.tamtac.tamtac.payload.request.LoginCustomerRequest;

import java.util.Map;

public interface CustomerServiceImp {
    CustomerDTO createCustomer(LoginCustomerRequest loginCustomerRequest);
    boolean changePassword(String token, String password);
    public Map<String, Object> loginCustomer(LoginCustomerRequest loginCustomerRequest);
    CustomerDTO getProfile(int id, String token);
    boolean deleteCustomer(String token);
    CustomerDTO updateCustomer(int id, String token, CustomerRequest customerRequest);
}
