package com.unitramite.unitramite.mapper;

import com.unitramite.unitramite.dto.ProcessDto;
import com.unitramite.unitramite.entity.Process;

public class ProcessMapper {
   public static ProcessDto mapToProcessDto(Process process) {
       return new ProcessDto(
               process.getId(),
               process.getTitle(),
               process.getContent(),
               process.getDate(),
               process.getUrl()
       );
   }
   public static Process mapToProcess(ProcessDto processDto) {
       return new Process(
               processDto.getId(),
               processDto.getTitle(),
               processDto.getContent(),
               processDto.getDate(),
               processDto.getUrl()
       );
   }
}
