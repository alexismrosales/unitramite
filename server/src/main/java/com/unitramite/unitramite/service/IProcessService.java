package com.unitramite.unitramite.service;

import com.unitramite.unitramite.dto.ProcessDto;

import java.util.List;

public interface IProcessService {
    ProcessDto createProcess(ProcessDto processDto);
    List<ProcessDto> getAllProcesses();
}
