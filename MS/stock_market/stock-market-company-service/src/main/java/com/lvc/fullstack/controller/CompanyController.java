package com.lvc.fullstack.controller;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lvc.fullstack.entity.Company;
import com.lvc.fullstack.entity.Result;
import com.lvc.fullstack.model.CompanyModel;
import com.lvc.fullstack.service.impl.CompanyService;
import com.lvc.fullstack.service.impl.StockPriceService;
@RestController
@RequestMapping("/companyinfo")
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @Autowired
    StockPriceService stockPriceService;

    @GetMapping(produces = "application/json")
    public Result<Object> getCompanyList() {

    	List<Company> companyList = companyService.findCompanyList();
    	List<CompanyModel> companyModel = companyList.stream().map(company -> {
    		CompanyModel ret = new CompanyModel();
    		BigDecimal currentPrice = stockPriceService.findLatestPrice(company.getStockCode());
    		ret.setCurrentPrice(currentPrice);
    		return ret;
    	}).collect(Collectors.toList());
        return Result.ok(companyModel);
    }

    @DeleteMapping(path = { "/{id}" })
    public Result<Object> delete(@PathVariable("id") int id) {
        Company deletedEmp = null;
		if (deletedEmp != null) {
			return Result.ok();
		} else {
			return Result.error("fail");
		}
    }

    @PostMapping
    public Result<Object> create(@RequestBody Company com) {
        Company ret = companyService.createCompany(com);

        if (ret != null) {
			return Result.ok();
		} else {
			return Result.error("fail");
		}
    }

}
