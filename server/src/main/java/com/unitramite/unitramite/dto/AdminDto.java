package com.unitramite.unitramite.dto;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AdminDto {
    private Long id;
    private String role;
    private String username;
    private String password;
    private String token;
}