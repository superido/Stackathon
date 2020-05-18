package com.lvc.fullstack.service;

import java.util.List;

import com.lvc.fullstack.entity.Company;

public interface ICompanyService {

    List<Company> findCompanyList();

    Company createCompany(Company company);

    Company findCompanyNameByStockCode(String stockCode);
}
