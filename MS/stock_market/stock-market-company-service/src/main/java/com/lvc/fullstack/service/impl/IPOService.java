package com.lvc.fullstack.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.lvc.fullstack.dao.IPORepository;
import com.lvc.fullstack.entity.IPOPlanned;
import com.lvc.fullstack.service.IIPOService;

@Service
public class IPOService implements IIPOService {

    @Autowired
    private IPORepository ipoDao;

    @Override
    public List<IPOPlanned> findIPOList() {
    	Sort.Order order = Sort.Order.desc("openDate");
    	Sort sort = Sort.by(order);
        return ipoDao.findAll(sort);
    }

    @Override
    public IPOPlanned createIPO(IPOPlanned ipoPlanned) {
        return this.ipoDao.save(ipoPlanned);
    }
}
