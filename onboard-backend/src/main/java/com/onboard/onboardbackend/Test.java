package com.onboard.onboardbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {
    @GetMapping("/test")
    public String test(){
        return "first rest api in java springboot";
    }
}
