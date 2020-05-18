package com.lvc.fullstack.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lvc.fullstack.entity.IPOPlanned;

@Repository
public interface IPORepository extends JpaRepository<IPOPlanned, Long> {}
