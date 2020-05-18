package com.lvc.fullstack.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lvc.fullstack.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    Company findStockCodeByCompanyId(String companyId);

    Company findCompanyNameByStockCode(String stockCode);
}
