package com.unitramite.unitramite.utils;

import io.jsonwebtoken.*;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@NoArgsConstructor
public class JwtUtil {

    private final String secret = "testSecret";

    public String generateToken(String username) {
        long now = System.currentTimeMillis();
        // Tiempo de validacion del token
        int jwtExpirationInMilliseconds = 3600000;
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + jwtExpirationInMilliseconds))
                .signWith(SignatureAlgorithm.HS512, secret.getBytes())
                .compact();
    }

    public Boolean validateToken(String token){
        try{
            Jwts.parser()
                .setSigningKey(secret.getBytes())
                .parseClaimsJws(token);
            return true; // El token es válido
        } catch (ExpiredJwtException e){
            System.out.println("El token está expirado: " + e.getMessage());
            return false;
        } catch (UnsupportedJwtException e){
            System.out.println("El token no es soportado: " + e.getMessage());
            return false;
        } catch (MalformedJwtException e){
            System.out.println("El token no está bien formado: " + e.getMessage());
            return false;
        } catch (SignatureException e){
            System.out.println("La firma del token no coincide: " + e.getMessage());
            return false;
        } catch (IllegalArgumentException e){
            System.out.println("Argumento ilegal: " + e.getMessage());
            return false;
        }
    }
}
