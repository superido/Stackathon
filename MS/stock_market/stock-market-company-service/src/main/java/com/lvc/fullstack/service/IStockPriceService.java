package com.lvc.fullstack.service;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

import com.lvc.fullstack.entity.StockPrice;

public interface IStockPriceService {

    BigDecimal findLatestPrice(String companyCode);
    
    List<StockPrice> findStockPrice(String companyId, String stockExchange, Date startDate, String startTime, Date endDate, String endTime);

}
