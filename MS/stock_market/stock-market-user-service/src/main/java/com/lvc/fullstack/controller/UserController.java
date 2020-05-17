package com.lvc.fullstack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lvc.fullstack.entity.Result;
import com.lvc.fullstack.entity.User;
import com.lvc.fullstack.service.IUserService;

@RestController
@RequestMapping("/userinfo")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping(value = "/login")
    public Result<Object> login(@RequestBody User userObj){
        User user = userService.login(userObj);
        user.setPassword("");
        return Result.ok(user);
    }

    @PostMapping(value = "/signup")
    public Result<Object> signup(@RequestBody User userObj){
        User user = userService.signup(userObj);
        return Result.ok(user);
    }

    @PostMapping(value = "/logout")
    public Result<Object> userLogout(@RequestBody User userObj){
        
        return Result.ok();
    }
}
