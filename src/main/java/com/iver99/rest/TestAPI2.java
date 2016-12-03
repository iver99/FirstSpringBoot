package com.iver99.rest;

import com.iver99.entity.Test;
import com.iver99.persist.api.TestDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by chehao on 2016/12/3.
 */
@RestController
@SpringBootApplication
@RequestMapping("/test2")
@ComponentScan("com.iver99.*")
@EnableJpaRepositories("com.iver99.*")
@EntityScan("com.iver99.*")
public class TestAPI2 {

    @RequestMapping(method= RequestMethod.GET)
    public String home() {
        Test t=testDao.getOne(1L);
        if(t!=null){
            return t.getId().toString();
        }else{
            return "hello";
        }
    }
    @Autowired
    private TestDao testDao;
}
