package com.lvc.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lvc.fullstack.entity.IPOPlanned;
import com.lvc.fullstack.entity.Result;
import com.lvc.fullstack.service.impl.IPOService;

import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;

@Slf4j
@RestController
public class IPOController {

    @Autowired
    private IPOService ipoService;

    public IPOController(IPOService ipoService) {
        this.ipoService = ipoService;
    }

    @PostMapping(value = "/ipo")
    public Result<Object> createNewIPO(@RequestBody IPOPlanned ipoPlaned) {
        IPOPlanned ret = ipoService.createIPO(ipoPlaned);
        if (ret != null) {
			return Result.ok();
		} else {
			return Result.error("fail");
		}
    }

    @GetMapping(value = "/ipo")
    public Result<Object> getIPOList(){
        JSONObject jsonObject = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        List<IPOPlanned> ipoList = this.ipoService.findIPOList();
        return Result.ok(ipoList);
    }

}
