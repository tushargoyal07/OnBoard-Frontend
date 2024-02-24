package com.onboard.onboardbackend;

import com.onboard.onboardbackend.dao.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OnboardBackendApplication {
	@Autowired
	private User user;

	public static void main(String[] args) {
		SpringApplication.run(OnboardBackendApplication.class, args);
	}

}
