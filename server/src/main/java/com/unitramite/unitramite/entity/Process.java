package com.unitramite.unitramite.entity;

import lombok.*;
import jakarta.persistence.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "Process")
public class Process {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT", name = "title")
    private String title;
    @Column(columnDefinition = "TEXT", name = "content")
    private String content;
    @Column(name = "date")
    private LocalDate date;
    @Column(columnDefinition = "VARCHAR(255)", name = "url")
    private String url;
}
