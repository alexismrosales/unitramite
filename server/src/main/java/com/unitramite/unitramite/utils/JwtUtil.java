package com.unitramite.unitramite.utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtUtil {

    public String generateToken(String username) {
        long now = System.currentTimeMillis();
        String secret = "testSecret";
        int jwtExpirationInMilliseconds = 3600000;
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + jwtExpirationInMilliseconds))
                .signWith(SignatureAlgorithm.HS512, secret.getBytes())
                .compact();
    }
}