package com.unitramite.unitramite.service.implementation;

import com.unitramite.unitramite.dto.ProcessDto;
import com.unitramite.unitramite.entity.Process;
import com.unitramite.unitramite.mapper.ProcessMapper;
import com.unitramite.unitramite.repository.ProcessRepository;
import com.unitramite.unitramite.service.IProcessService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProcessService implements IProcessService {
    ProcessRepository processRepository;

    @Override
    public ProcessDto createProcess(ProcessDto processDto) {
        Process process = ProcessMapper.mapToProcess(processDto);
        Process savedProcess = processRepository.save(process);
        return ProcessMapper.mapToProcessDto(savedProcess);
    }

    @Override
    public List<ProcessDto> getAllProcesses() {
        List<Process> processes = processRepository.findAll();
        return processes.stream().map(ProcessMapper::mapToProcessDto).collect(Collectors.toList());
    }

}
