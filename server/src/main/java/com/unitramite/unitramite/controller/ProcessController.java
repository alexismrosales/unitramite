package com.unitramite.unitramite.controller;

import com.unitramite.unitramite.dto.ProcessDto;
import com.unitramite.unitramite.service.implementation.ProcessService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*") //Validación temporal
@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ProcessController {
    private ProcessService processService;

    @PostMapping
    public ResponseEntity<ProcessDto> createProcess(@RequestBody ProcessDto processDto) {
        ProcessDto savedProcess = processService.createProcess(processDto);
        return new ResponseEntity<>(savedProcess, HttpStatus.CREATED);
    }
}
