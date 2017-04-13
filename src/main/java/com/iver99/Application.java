package com.iver99;

import com.iver99.rest.*;
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
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) throws Exception {
        Object[] list=new Object[]{
                Application.class,
                AnnouncementAPI.class,
                MyAnnouncementAPI.class,
                TestAPI.class,
                AuthAPI.class,
                MyActivityAPI.class,
                ActivityAPI.class
        };
        SpringApplication.run(list, args);
    }

}