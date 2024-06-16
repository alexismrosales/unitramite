package com.unitramite.unitramite.service;

import com.unitramite.unitramite.dto.AdminDto;

public interface IAdminService {
    AdminDto createAdmin(AdminDto adminDto);
    AdminDto getAdmin(AdminDto adminDto);
}