package com.unitramite.unitramite.controller;

import com.unitramite.unitramite.dto.AdminDto;
import com.unitramite.unitramite.service.implementation.AdminService;
import com.unitramite.unitramite.utils.TokenUtil;
import com.unitramite.unitramite.utils.UserUtil;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*") //Validación temporal
@RestController
@RequestMapping("/api/admin")
@AllArgsConstructor
public class AdminController {
    private AdminService adminService;
    // Endpoint de crear administrador
    @PostMapping("/create")
    public ResponseEntity<AdminDto> createAdmin(@RequestBody AdminDto adminDto) {
       AdminDto savedAdmin = adminService.createAdmin(adminDto);
       return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    // Loguear administrador endpoint
    @PostMapping( "/login")
    public ResponseEntity<AdminDto> loginAdmin(@RequestBody UserUtil user) {
        String username = user.getUsername();
        String password = user.getPassword();
        AdminDto savedAdmin = adminService.getAdmin(username,password);
        // En caso que el usuario o contraseña sean incorrectos
        if (savedAdmin == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(savedAdmin, HttpStatus.OK);
    }

    @PostMapping("/validateToken")
    public ResponseEntity<?> validateToken(@RequestBody TokenUtil body) {
        String token = body.getToken();
        Boolean validToken = adminService.validateToken(token);
        if (validToken) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
