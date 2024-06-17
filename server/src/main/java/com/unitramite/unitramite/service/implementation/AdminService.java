package com.unitramite.unitramite.service.implementation;

import com.unitramite.unitramite.dto.AdminDto;
import com.unitramite.unitramite.entity.Admin;
import com.unitramite.unitramite.mapper.AdminMapper;
import com.unitramite.unitramite.repository.AdminRepository;
import com.unitramite.unitramite.service.IAdminService;
import com.unitramite.unitramite.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService implements IAdminService {
    private AdminRepository adminRepository;
    private JwtUtil jwtUtil;
    // Creación del administrador
    @Override
    public AdminDto createAdmin(AdminDto adminDto) {
        Admin admin = AdminMapper.mapToAdmin(adminDto);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminMapper.mapToAdminDto(savedAdmin);
    }

    // Verificación del usuario
    @Override
    public AdminDto getAdmin(String username, String password){
        Admin admin  = adminRepository.findByUsernameAndPassword(username, password);
        // Si hay match generaremos el token
        if(admin == null){
          return null;
        }
        String token = jwtUtil.generateToken(admin.getUsername());
        admin.setToken(token);
        return AdminMapper.mapToAdminDto(admin);
    }

    @Override
    public Boolean validateToken(String token){
        return jwtUtil.validateToken(token);
    }
}
