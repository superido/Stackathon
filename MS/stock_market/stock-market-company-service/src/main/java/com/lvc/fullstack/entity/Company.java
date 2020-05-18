package com.lvc.fullstack.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "company")
public class Company implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_id", nullable = false)
    private Long companyId;

    @Basic
    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Basic
    @Column(name = "turnover", nullable = false)
    private BigDecimal turnover;

    @Basic
    @Column(name = "CEO", nullable = false)
    private String CEO;

    @Basic
    @Column(name = "board_chairman")
    private String boardChairman;

    @Basic
    @Column(name = "stock_exchanges")
    private String stockExchanges;

    @Basic
    @Column(name = "sector")
    private String sector;

    @Basic
    @Column(name = "brief")
    private String briefWriteup;

    @Basic
    @Column(name = "stock_code", nullable = false)
    private String stockCode;

    @Basic
    @Column(name = "create_date", nullable = false)
    @CreatedDate
    private Date createDate;

    @Basic
    @Column(name = "update_date", nullable = false)
    @LastModifiedDate
    private Date updateDate;
}
