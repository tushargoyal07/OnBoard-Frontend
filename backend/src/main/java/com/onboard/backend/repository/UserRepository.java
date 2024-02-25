package com.onboard.backend.repository;

import com.onboard.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // Optional additional methods for specific user searches

}