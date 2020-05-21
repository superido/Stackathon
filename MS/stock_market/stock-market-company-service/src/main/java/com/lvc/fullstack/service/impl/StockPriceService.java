package com.lvc.fullstack.service.impl;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lvc.fullstack.dao.CompanyRepository;
import com.lvc.fullstack.dao.StockPriceRepository;
import com.lvc.fullstack.entity.Company;
import com.lvc.fullstack.entity.StockPrice;
import com.lvc.fullstack.service.IStockPriceService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class StockPriceService implements IStockPriceService {

	@Autowired
	private CompanyRepository companyRepository;

	@Autowired
	private StockPriceRepository stockPriceRepository;

	@Override
	public BigDecimal findLatestPrice(String companyId) {
		List<StockPrice> stockPriceDetails = stockPriceRepository.findCurrentPriceByCompanyId(companyId);
		if (stockPriceDetails != null && stockPriceDetails.size() > 0) {
			return stockPriceDetails.get(0).getCurrentPrice();
		}
		return null;
	}

	@Override
	public List<StockPrice> findStockPrice(String companyId, String stockExchange, Date startDate, String startTime,
			Date endDate, String endTime) {
		Company company = this.companyRepository.findStockCodeByCompanyId(companyId);
		String stockCode = company.getStockCode();
		return this.stockPriceRepository.findStockPriceByStatement(stockCode, stockExchange, startDate, startTime,
				endDate, endTime);
	}
}
