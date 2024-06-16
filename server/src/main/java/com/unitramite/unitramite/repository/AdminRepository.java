package com.unitramite.unitramite.repository;

import com.unitramite.unitramite.dto.AdminDto;
import com.unitramite.unitramite.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    @Query("SELECT a FROM Admin a WHERE a.username = :username AND a.password = :password ")
    Admin findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
