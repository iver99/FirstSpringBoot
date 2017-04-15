package com.iver99.rest;

import com.iver99.bean.UserInfoBean;
import com.iver99.entity.UserInfo;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.UserInfoDao;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by chehao on 2017/3/28 10:28.
 */
@RestController
@RequestMapping("/v1/userInfo")
public class AuthAPI {
    Logger LOGGER = LogManager.getLogger(AuthAPI.class);

    @Autowired
    UserInfoDao userInfoDao;

    @RequestMapping(method = RequestMethod.GET)
    public Object checkLogin(UserInfoBean userInfoBean){
       if(StringUtils.isEmpty(userInfoBean.getPassword()) || StringUtils.isEmpty(userInfoBean.getUsername())){
           LOGGER.warn("UserName or Password cannot be empty!");
           return new MsgModel(null,"UserName or Password cannot be empty!",false);
       }
        List<UserInfo> userInfos = userInfoDao.checkLogin(userInfoBean.getUsername(), userInfoBean.getPassword());
        if(userInfos!=null){
            LOGGER.info("Login success!");
            return new MsgModel(userInfos.get(0).getUsername(),"Login succcess",true);
        }
        return new MsgModel(null,"Login failed!",false);

    }

    @RequestMapping(method = RequestMethod.POST)
    public Object register(UserInfoBean userInfoBean){
        if(StringUtils.isEmpty(userInfoBean.getPassword()) || StringUtils.isEmpty(userInfoBean.getUsername())){
            LOGGER.warn("UserName or Password cannot be empty!");
            return new MsgModel(null,"UserName or Password cannot be empty!",false);
        }
        UserInfo userInfo  = new UserInfo();
        userInfo.setPassword(userInfoBean.getPassword());
        userInfo.setUsername(userInfoBean.getUsername());
        userInfoDao.save(userInfo);
        return new MsgModel(userInfoBean.getUsername(), "register success",true);
    }

}
