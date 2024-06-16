package com.unitramite.unitramite.dto;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProcessDto {
    private Long id;
    private String title;
    private String content;
    private LocalDate date;
    private String url;
}
