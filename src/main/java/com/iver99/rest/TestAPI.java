package com.iver99.rest;

import javafx.application.Application;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by chehao on 2016/12/2.
 */
@RestController
//@EnableAutoConfiguration
@SpringBootApplication()
public class TestAPI {
    @RequestMapping("/test")
    public String home() {
        return "Hello";
    }
    public static void main(String[] args) {
        SpringApplication.run(TestAPI.class, args);
    }
}
