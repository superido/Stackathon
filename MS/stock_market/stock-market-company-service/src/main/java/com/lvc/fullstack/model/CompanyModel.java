package com.lvc.fullstack.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

@Data
public class CompanyModel implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    private Long companyId;

    private String companyName;

    private BigDecimal turnover;

    private String CEO;

    private String boardChairman;

    private String stockExchanges;

    private String sector;

    private String briefWriteup;

    private String stockCode;
    
    private BigDecimal currentPrice;

    private Date createDate;

    private Date updateDate;
}
