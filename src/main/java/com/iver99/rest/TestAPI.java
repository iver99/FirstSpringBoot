package com.iver99.rest;

import com.iver99.entity.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by chehao on 2016/12/2.
 */
@RestController
@SpringBootApplication()
@RequestMapping("/test")
//@ComponentScan("com.iver99.*")
//@EnableJpaRepositories("com.iver99.*")
@EntityScan("com.iver99.*")
public class TestAPI {

    @Autowired
    private TestDao testDao;

    @RequestMapping(method= RequestMethod.GET)
    @Transactional
    public String home() {
        Test t=testDao.getOne(1L);
        if(t!=null){
            return t.getId().toString();
        }else{
            return "hello";
        }
    }
    public static void main(String[] args) {
        SpringApplication.run(TestAPI.class, args);
    }

    @Bean(name="sessionFactory")
    public HibernateJpaSessionFactoryBean sessionFactory() {
        return new HibernateJpaSessionFactoryBean();
    }

}
