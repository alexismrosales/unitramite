package com.unitramite.unitramite.service;

import com.unitramite.unitramite.dto.AdminDto;

public interface IAdminService {
    AdminDto createAdmin(AdminDto adminDto);

    // Verificación del usuario
    AdminDto getAdmin(String username, String password);

    Boolean validateToken(String token);
}