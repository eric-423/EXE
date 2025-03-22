package com.tamtac.tamtac.controller;

import com.tamtac.tamtac.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/token")
public class TokenController {

    @Autowired
    private TokenService tokenService;

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestParam String token){
        return ResponseEntity.ok(tokenService.refreshToken(token));
    }
}
