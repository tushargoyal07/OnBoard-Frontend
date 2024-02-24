package com.onboard.onboardbackend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class User {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void createTable() {
        String query = "CREATE TABLE user(id SERIAL PRIMARY KEY, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL";
        jdbcTemplate.execute(query);
    }
}