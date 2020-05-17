package com.lvc.fullstack.service;

import com.lvc.fullstack.entity.User;

import net.minidev.json.JSONObject;

public interface IUserService {

    User login(User user);

    User signup(User user);

    User logout(String username);

    User getUserInfo(User user);

    User findByUsername(String username);
}
