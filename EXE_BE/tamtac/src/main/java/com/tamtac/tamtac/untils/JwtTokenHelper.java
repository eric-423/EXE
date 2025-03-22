package com.tamtac.tamtac.untils;

import com.tamtac.tamtac.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtTokenHelper {
    @Value("${jwt.secretkey}")
    private String key;

    public String generateToken(User user, Long time) {
        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));
        String token = Jwts.builder()
                .setIssuer("ATDStore")
                .setSubject("JWT Token")
                .claim("role", user.getRoleHistories().get(0).getRole().getName())
                .claim("name", user.getFullName())
                .claim("address", user.getAddress())
                .claim("id", user.getId())
                .claim("phone", user.getPhone())
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date().getTime()) + time))
                .signWith(secretKey).compact();
        return token;
    }

    public long getExpirationTime(String token) {
        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));
        Claims claims = Jwts.parser()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getExpiration().getTime();
    }

    public boolean verifyToken(String token) {
        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(key));
        try {
            Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}
