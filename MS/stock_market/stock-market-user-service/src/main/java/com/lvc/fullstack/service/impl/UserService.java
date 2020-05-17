package com.lvc.fullstack.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lvc.fullstack.dao.UserRepository;
import com.lvc.fullstack.entity.User;
import com.lvc.fullstack.service.IUserService;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User login(User user) {
		User ret = userRepository.findByUserNameAndPassword(user.getUserName(), user.getPassword());
		return ret;
	}

	@Override
	public User signup(User user) {
        User retUser = userRepository.save(user);

        return retUser;
	}

	@Override
	public User logout(String username) {
		User user = userRepository.findByUserName(username);
		return user;
	}

	@Override
	public User getUserInfo(User user) {
		String username = user.getUserName();
		User findUser = userRepository.findByUserName(username);
		return findUser;
	}

	@Override
	public User findByUsername(String username) {
		return userRepository.findByUserName(username);
	}


}
