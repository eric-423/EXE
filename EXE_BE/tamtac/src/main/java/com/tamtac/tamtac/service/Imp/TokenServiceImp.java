package com.tamtac.tamtac.service.Imp;

import java.util.Map;

public interface TokenServiceImp {
    Map<String, Object> refreshToken(String token);
}
