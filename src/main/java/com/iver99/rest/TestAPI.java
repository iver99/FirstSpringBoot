package com.iver99.rest;

import com.iver99.bean.TestBean;
import com.iver99.entity.Test;
import com.iver99.persist.api.TestDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;

/**
 * Created by chehao on 2016/12/2.
 */
@RestController
@RequestMapping("/test")
public class TestAPI {

    private final Logger logger = LoggerFactory.getLogger(TestAPI.class);
    @Autowired
    private TestDao testDao;

    @RequestMapping(value = "activities", method = RequestMethod.GET)
    public Object get() {

        String result = "[\n" +
                "                                                               {\n" +
                "                                                                   \"id\": \"040\",\n" +
                "                                                                   \"title\": \"This is an activity title\",\n" +
                "                                                                   \"publisher\": \"Admin\",\n" +
                "                                                                   \"status\": \"1\",\n" +
                "                                                                   \"created_at\": \"2017-02-10\",\n" +
                "                                                                   \"description\": \"This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.\",\n" +
                "                                                                   \"activity_time\": \"2017-03-10\",\n" +
                "                                                                   \"activity_place\": \"Beijing\"\n" +
                "                                               }]";

        return result;

    }

    @RequestMapping(value = "register", method = RequestMethod.POST)
    public Object register(String userName, String email, String password) {
        String result = "\"userName\"" + userName + ", \"email\":" + email + ", \"password\":" + password ;
        return result;
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public Object login(String userName,String password) {
        String result = "\"userName\"" + userName + ", \"password\":" + password ;
        return result;
    }


    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Object get(@PathVariable Long id) {

        logger.info("Service to Call [GET] test for id {}", id);
        try {
            Test t = testDao.getOne(id);
            if (t != null) {
                TestBean bean = new TestBean();
                BeanUtils.copyProperties(t, bean);
                return bean;
            }
        } catch (EntityNotFoundException e) {
            e.printStackTrace();
        }
        return ResponseEntity.notFound();

    }

    @RequestMapping(method = RequestMethod.POST)
    public Object create(TestBean bean) {
        logger.info("Service to Call [POST] test");
        if (bean != null) {
            Test t = new Test();
            BeanUtils.copyProperties(bean, t);
            testDao.save(t);
            return ResponseEntity.ok(t);
        }
        return ResponseEntity.badRequest();
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Object update(TestBean bean) {
        logger.info("Service to Call [PUT] test");
        try {
            if (bean != null) {
                Long id = bean.getId();
                if (id == null) {
                    throw new Exception("Id cannot be null!");
                }
                Test t = testDao.getOne(id);
                if (t == null) {
                    throw new Exception("Specific Test Entity is not found for id " + id);
                }
                if (bean.getAddress() != null) {
                    t.setAddress(bean.getAddress());
                }
                if (bean.getName() != null) {
                    t.setName(bean.getName());
                }
                return ResponseEntity.ok(testDao.save(t));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.unprocessableEntity();
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public Object delete(@PathVariable Long id) {
        logger.info("Service to Call [DELETE] test for id {}", id);
        try {
            if (id == null) {
                throw new Exception("Id cannot be null!");
            }
            testDao.delete(id);
            return ResponseEntity.ok(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.notFound();
    }

  /*  public static void main(String[] args) {
        SpringApplication.run(TestAPI.class, args);
    }*/


}
