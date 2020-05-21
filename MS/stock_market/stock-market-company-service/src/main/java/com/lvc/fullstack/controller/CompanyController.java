package com.lvc.fullstack.controller;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
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

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.lvc.fullstack.entity.Company;
import com.lvc.fullstack.entity.Result;
import com.lvc.fullstack.entity.StockPrice;
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

	@PostMapping(value = "/stock-price")
    public Result<Object> getStockPrice(@RequestBody JSONObject stockPriceDetailJson) {
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        String companyId = stockPriceDetailJson.getString("companyId");
        String stockExchange = stockPriceDetailJson.getString("stockExchange");

        Date startDate = (Date) stockPriceDetailJson.getDate("startDate");
        String startTime = stockPriceDetailJson.getString("startTime");
        Date endDate = (Date) stockPriceDetailJson.getDate("endDate");
        String endTime = stockPriceDetailJson.getString("endTime");

        List<StockPrice> stockPriceDetails = stockPriceService.findStockPrice(companyId, stockExchange, startDate, startTime, endDate, endTime);
        stockPriceDetails.forEach((stockPriceDetail)->{
            java.sql.Date currentDate= stockPriceDetail.getPriceDate();
            java.sql.Time currentTime = stockPriceDetail.getPriceTime();
            BigDecimal currentPrice = stockPriceDetail.getCurrentPrice();
            JSONObject dataJson = new JSONObject();
            dataJson.put("currentDate", currentDate.toString());
            dataJson.put("currentTime", currentTime.toString());
            dataJson.put("currentPrice", currentPrice);
            jsonArray.add(dataJson);
        });
        jsonObject.put("stockPriceDetails", jsonArray);

		return Result.ok(jsonObject);
    }
//
//    private List<Date> getTimeline(Date fromPeriod, Date toPeriod, String periodSize, String periodUnit){
//        Calendar calendar = Calendar.getInstance();
//        calendar.setTime(fromPeriod);
//
//        List<Date> timeline = new ArrayList<>();
//        while(calendar.getTime().before(toPeriod)){
//            timeline.add(calendar.getTime());
//            switch(periodUnit)
//            {
//                case "second" :
//                    calendar.add(Calendar.SECOND, Integer.valueOf(periodSize));
//                    break;
//                case "minute" :
//                    calendar.add(Calendar.MINUTE, Integer.valueOf(periodSize));
//                    break;
//                case "hour" :
//                    calendar.add(Calendar.HOUR, Integer.valueOf(periodSize));
//                    break;
//                case "month" :
//                    calendar.add(Calendar.MONTH, Integer.valueOf(periodSize));
//                    break;
//                case "year" :
//                    calendar.add(Calendar.YEAR, Integer.valueOf(periodSize));
//                    break;
//            }
//        }
//        return timeline;
//    }
}
