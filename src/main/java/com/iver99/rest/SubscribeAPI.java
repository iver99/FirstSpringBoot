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

import java.util.List;

/**
 * Created by chehao on 2017/4/13 21:12.
 */
@RestController
@RequestMapping("/v1")
public class SubscribeAPI {

    Logger LOGGER = LogManager.getLogger(SubscribeAPI.class);
    @Autowired
    MyActivityDao myActivityDao;

    @RequestMapping(value = "/subscribe", method = RequestMethod.PUT)
    public Object subscribe(Long userId, Long activityId){
        LOGGER.info("Subscribe activity for user "+ userId +" activity "+activityId);
        if(userId == null || activityId ==null){
            return new MsgModel(null, "user id or activity id is null",false);
        }
        List<MyActivity> myActivities = myActivityDao.getByUserIdAndActivityId(userId,activityId);
        if(myActivities !=null && !myActivities.isEmpty()){
            for(MyActivity m : myActivities){
                LOGGER.info("update exist entry");
                m.setIs_subscribed(1);
                myActivityDao.save(m);
            }
        }else{
            LOGGER.info("new My activity entry");
            MyActivity myActivity = new MyActivity();
            myActivity.setStatus(1);
            myActivity.setActivity_id(activityId);
            myActivity.setUser_id(userId);
            myActivity.setIs_subscribed(1);
            myActivityDao.save(myActivity);
            LOGGER.info("Service to call subscribe  activity");
        }
        return new MsgModel(null, "subscribe activity success", true);

    }

    @RequestMapping(value ="unsubscribe", method = RequestMethod.PUT)
    public Object unSubscrib(Long userId, Long activityId){
        LOGGER.info("unsubscribe activity for user "+userId +" activity "+activityId);
        List<MyActivity> myActivities = myActivityDao.getByUserIdAndActivityId(userId, activityId);
        if(myActivities !=null && !myActivities.isEmpty()){
            for(MyActivity myActivity1: myActivities){
                MyActivity myActivity = myActivity1;
                myActivity.setIs_subscribed(0);
                myActivityDao.save(myActivity);

            }
//            MyActivity myActivity1 = myActivities.get(0);
            LOGGER.info("unsubscribe activity..");
//            myActivity1.setIs_subscribed(0);
            return new MsgModel(null,"un subscribe activity success", true);
        }
        LOGGER.info("my activity is null");
        return new MsgModel(null,"un subscribe activity fail",false);
    }
}
