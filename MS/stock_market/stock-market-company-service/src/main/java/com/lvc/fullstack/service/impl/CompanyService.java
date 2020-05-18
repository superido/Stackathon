package com.lvc.fullstack.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lvc.fullstack.dao.CompanyRepository;
import com.lvc.fullstack.entity.Company;
import com.lvc.fullstack.service.ICompanyService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CompanyService implements ICompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public List<Company> findCompanyList() {
        return this.companyRepository.findAll();
    }

    @Override
    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }
    @Override
    public Company findCompanyNameByStockCode(String stockCode) {
        return this.companyRepository.findCompanyNameByStockCode(stockCode);
    }
}
