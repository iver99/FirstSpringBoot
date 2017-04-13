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
import java.util.Date;
import java.util.List;

/**
 * Created by chehao on 2017/4/13 11:26.
 */
@RestController
@RequestMapping("/v1/myActivity")
public class MyActivityAPI {
    Logger LOGGER = LogManager.getLogger(MyActivityAPI.class);

    @Autowired
    MyActivityDao myActivityDao;
    @Autowired
    ActivityDao activityDao;


    @RequestMapping(value = "{userId}", method = RequestMethod.GET)
    public Object getMyActivity(@PathVariable Long userId, Integer isSubscribed){
        if (userId == null || userId <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        List<MyActivity> myActivities =null;
        if( isSubscribed != null && isSubscribed ==1){
            LOGGER.info("Retrieve user subscribed activities for user "+userId);
            myActivities = myActivityDao.getSubscribed(userId);
        }else{
            LOGGER.info("Retrieve all user enrolled activities for user "+userId);
            myActivities = myActivityDao.getActivitiesByUserId(userId);
        }
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
        return new MsgModel(null, "get user's activity list failed!", false);

    }


    @RequestMapping(method = RequestMethod.DELETE)
    public Object deleteMyActivity(Long userId,Long activityId){
        LOGGER.info("Service to call DELETE my activity "+ userId+" "+activityId);
        List<MyActivity> myActivity = myActivityDao.getByUserIdAndActivityId(userId,activityId);
        LOGGER.info("my activity size is "+myActivity.size());
        Long myActivityId = null;
        if(myActivity!=null && !myActivity.isEmpty()){
            for(MyActivity  myActivity1: myActivity){
                myActivity1.setIs_enrolled(0);
                myActivityDao.save(myActivity1);
            }
//            MyActivity myActivity1 = myActivity.get(0);
//            myActivityId = myActivity1.getId();
            return new MsgModel(null,"delete my activity succcess", true);
        }else{
            LOGGER.info("new My activity is created!");
            MyActivity myActivity1 = new MyActivity();
            myActivity1.setIs_enrolled(1);
            myActivity1.setIs_subscribed(0);
            myActivity1.setUser_id(userId);
            myActivity1.setRegister_time(new Date());
            myActivity1.setStatus(1);
            myActivity1.setActivity_id(activityId);
            myActivityDao.save(myActivity1);
        }
        LOGGER.info("delete id is null!");
        return  new MsgModel(null,"delete my activity fail", false);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object addUserActivity(Long userId, Long activityId){
        LOGGER.info("user id is "+ userId+ " activity id is "+activityId) ;
        List<MyActivity> myActivities = myActivityDao.getByUserIdAndActivityId(userId,activityId);
        if(myActivities !=null && !myActivities.isEmpty()){
            for(MyActivity myActivity : myActivities){
                myActivity.setIs_enrolled(1);
                myActivityDao.save(myActivity);
            }
        }else{

            MyActivity myActivity = new MyActivity();
            myActivity.setStatus(1);
            myActivity.setActivity_id(activityId);
            myActivity.setUser_id(userId);
            myActivity.setIs_subscribed(0);
            myActivityDao.save(myActivity);
        }
        LOGGER.info("Service to call add user activity");
        return new MsgModel(null, "add user activity success", true);
    }
}
