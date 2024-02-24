package com.onboard.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onboard.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
