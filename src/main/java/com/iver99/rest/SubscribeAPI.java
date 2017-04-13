package com.iver99.rest;

import com.iver99.entity.MyActivity;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.MyActivityDao;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by chehao on 2017/4/13 21:12.
 */
@RestController
@RequestMapping("/v1/subscribe")
public class SubscribeAPI {

    Logger LOGGER = LogManager.getLogger(SubscribeAPI.class);
    @Autowired
    MyActivityDao myActivityDao;

    @RequestMapping( method = RequestMethod.PUT)
    public Object subscribe(Long userId, Long activityId){
        LOGGER.info("Subscribe activity for user "+ userId +" activity "+activityId);
        if(userId == null || activityId ==null){
            return new MsgModel(null, "user id or activity id is null",false);
        }
        MyActivity myActivity = new MyActivity();
        myActivity.setStatus(1);
        myActivity.setActivity_id(activityId);
        myActivity.setUser_id(userId);
        myActivity.setIs_subscribed(1);
        myActivityDao.save(myActivity);
        LOGGER.info("Service to call subscribe  activity");
        return new MsgModel(myActivity, "subscribe activity success", true);

    }
}
