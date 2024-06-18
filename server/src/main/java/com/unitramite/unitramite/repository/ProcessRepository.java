package com.unitramite.unitramite.repository;

import com.unitramite.unitramite.dto.ProcessDto;
import com.unitramite.unitramite.entity.Process;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProcessRepository extends JpaRepository<Process, Long> {
}