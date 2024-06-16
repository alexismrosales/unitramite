package com.unitramite.unitramite.entity;

import lombok.*;
import jakarta.persistence.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "Admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "VARCHAR(50)", name = "role")
    private String role;
    @Column(columnDefinition = "VARCHAR(255)", name = "username")
    private String username;
    @Column(columnDefinition = "VARCHAR(255)", name = "password")
    private String password;
    // Este parámetro no se añadirá ni afectara la base de datos
    @Transient
    private String token;
}
