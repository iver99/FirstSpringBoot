package com.iver99.rest;

import com.iver99.model.MsgModel;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by chehao on 2017/3/28 10:28.
 */
@RestController
@RequestMapping("/v1/auth")
public class AuthAPI {
    Logger LOGGER = LogManager.getLogger(AuthAPI.class);

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public Object checkLogin(String userName,String password){
       if(StringUtils.isEmpty(userName) || StringUtils.isEmpty(password)){
           LOGGER.warn("UserName or Password cannot be empty!");
           return new MsgModel("UserName or Password cannot be empty!",false);
       }
       if(userName.equals("admin") && password.equals("admin")){
           return new MsgModel("Login success!",true);
       }
        return new MsgModel("Login failed!",false);

    }

}
