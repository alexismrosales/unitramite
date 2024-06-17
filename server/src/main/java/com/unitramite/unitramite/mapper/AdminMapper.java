package com.unitramite.unitramite.mapper;

import com.unitramite.unitramite.dto.AdminDto;
import com.unitramite.unitramite.entity.Admin;

public class AdminMapper {
    public static AdminDto mapToAdminDto(Admin admin) {
        return new AdminDto(
                admin.getId(),
                admin.getRole(),
                admin.getUsername(),
                admin.getPassword(),
                admin.getToken()
        );
    }

    public static Admin mapToAdmin(AdminDto adminDto) {
        return new Admin(
                adminDto.getId(),
                adminDto.getRole(),
                adminDto.getUsername(),
                adminDto.getPassword(),
                adminDto.getToken()
        );
    }
}
