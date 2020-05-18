package com.lvc.fullstack.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "ipo_planned")
public class IPOPlanned implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IPO_id", nullable = false)
    private Long IPOId;

    @Basic
    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Basic
    @Column(name = "stock_exchange", nullable = false)
    private String stockExchange;

    @Basic
    @Column(name = "pri_price", nullable = false)
    private BigDecimal priPrice;

    @Basic
    @Column(name = "total_no", nullable = false)
    private Integer totalNo;

    @Basic
    @Column(name = "open_date", nullable = false)
    private Date openDate;

    @Basic
    @Column(name = "remarks")
    private String remarks;

    @Basic
    @Column(name = "create_time", nullable = false)
    @CreatedDate
    private Date createDate;

    @Basic
    @Column(name = "update_time", nullable = false)
    @LastModifiedDate
    private Date updateDate;
}
