package com.unitramite.unitramite.mapper;

import com.unitramite.unitramite.dto.ReportsDto;
import com.unitramite.unitramite.entity.Reports;

public class ReportsMapper {
    public static ReportsDto mapToReportsDto(Reports reports) {
        return new ReportsDto(
                reports.getId(),
                reports.getContent(),
                reports.getDate()
        );
    }

    public static Reports mapToReports(ReportsDto reportsDto) {
        return new Reports(
                reportsDto.getId(),
                reportsDto.getContent(),
                reportsDto.getDate()
        );
    }
}
