package com.lvc.fullstack.service;

import java.util.List;

import com.lvc.fullstack.entity.IPOPlanned;

/**
 * 
 * @author ChaoLv
 *
 */
public interface IIPOService {
	
	List<IPOPlanned> findIPOList();

    IPOPlanned createIPO(IPOPlanned ipOPlanned);
}
