package com.onboard.backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.onboard.backend.entity.User;
import com.onboard.backend.repository.UserRepository;

public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }
}