package com.lvc.fullstack.dao;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lvc.fullstack.entity.StockPrice;

@Repository
public interface StockPriceRepository extends JpaRepository<StockPrice, Long> {

	List<StockPrice> findCurrentPriceByCompanyId(String companyId);
	
	@Query(nativeQuery = true, value = "select * from stock_market.stock_price where company_id = :companyId "
	+ "and stock_exchange = :stockExchange and (price_date between :startDate and :endDate) and (price_time between :startTime and :endTime) " + ""
			+ "order by price_date desc, price_time desc ")
	List<StockPrice> findStockPriceByStatement(@Param("companyId") String companyId,
			@Param("stockExchange") String stockExchange, @Param("startDate") Date startDate,
			@Param("startTime") Time startTime, @Param("endDate") Date endDate, @Param("endTime") Time endTime);

	List<StockPrice> findStockPriceByCompanyIdAndStockExchange(String companyId, String stockExchange);
}
