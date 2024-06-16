package com.unitramite.unitramite.dto;

import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReportsDto {
    private Long id;
    private String Content;
    private LocalDate Date;
}
