package com.iver99.config;

import com.iver99.rest.TestAPI;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by chehao on 2016/12/6.
 */
@ComponentScan("com.iver99.*")
@EnableJpaRepositories("com.iver99.*")
@EntityScan("com.iver99.*")
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) throws Exception {
        Object[] list=new Object[]{
                Application.class,
                TestAPI.class
        };
        SpringApplication.run(list, args);
    }

}