package com.iver99.rest;

import com.iver99.bean.ActivityBean;
import com.iver99.entity.Activity;
import com.iver99.entity.MyActivity;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.ActivityDao;
import com.iver99.persist.api.MyActivityDao;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
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
    @Autowired
    ActivityDao activityDao;

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
            // not enroll yet.
            myActivity.setIs_enrolled(0);
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

    @RequestMapping(value ="subscribe/{userId}", method = RequestMethod.GET)
    public Object getSubscription(@PathVariable Long userId){
        List<MyActivity> myActivities = myActivityDao.getSubscribed(userId);
        List<Long> idList = new ArrayList<>();
        if(myActivities !=null && !myActivities.isEmpty()){
            for(MyActivity myActivity : myActivities){
                idList.add(myActivity.getActivity_id());
            }
            LOGGER.info("Get my activities id list is "+idList);
        }
        List<Activity> activities= null;
        activities=activityDao.findAll(idList);
        List<ActivityBean> activityBeanList = new ArrayList<>();
        ActivityBean activityBean = null;
        if(activities !=null && !activities.isEmpty()){
            for(Activity activity: activities){
                activityBean = new ActivityBean();
                activityBean.setId(activity.getId());
                activityBean.setActivity_place(activity.getActivity_place());
                activityBean.setCapacity(activity.getCapacity());
                activityBean.setContact(activity.getContact());
                activityBean.setEnd_time(activity.getEnd_time());
                activityBean.setCreated_at(activity.getCreated_at());
                activityBean.setEnrolled(activity.getEnrolled());
                activityBean.setManager(activity.getManager());
                activityBean.setTitle(activity.getTitle());
                activityBean.setStart_time(activity.getStart_time());
                activityBean.setStatus(activity.getStatus());
                activityBean.setPublisher(activity.getPublisher());
                activityBean.setUpdate_time(activity.getUpdate_time());
                activityBean.setDescription(activity.getDescription());
                activityBeanList.add(activityBean);
            }
            return new MsgModel(activityBeanList, "get user's activity list success!", true);
        }

        return new MsgModel(null,"get subscription fail", false);
    }
}
