package com.iver99.rest;

import com.iver99.bean.ActivityBean;
import com.iver99.entity.Activity;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.ActivityDao;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by chehao on 2017/4/12 9:34.
 */
@RestController
@RequestMapping("/v1/activity")
public class ActivityAPI {
    Logger LOGGER = LogManager.getLogger(ActivityAPI.class);
    @Autowired
    private ActivityDao activityDao;


    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Object getActivityById(@PathVariable Long id) {
        if (id == null || id <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        Activity activity = activityDao.getOne(id);
        ActivityBean activityBean = null;
        if (activity != null) {
            activityBean = getActivityBean(activity);
        }

        if (activityBean == null) {
            return new MsgModel(null, "Activity with Id" + id + " is not found!", false);
        }
        return new MsgModel(activityBean, "get activity by id success!", true);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Object getAllActivities(String searchString) {
        LOGGER.info("Service to call GET all activities...");
        List<Activity> activities = null;
        if(searchString !=null && !StringUtils.isEmpty(searchString)){
            LOGGER.info("searching for "+searchString);
            activities = activityDao.search("%"+searchString+"%","%"+searchString+"%");
        }else{
            LOGGER.info("Get all activities");
            activities = activityDao.findAll();
        }
        ActivityBean activityBean = null;
        List<ActivityBean> activityBeanList = new ArrayList<>();
        if (activities != null && !activities.isEmpty()) {
//            activityBean = new ActivityBean();
            for (Activity activity : activities) {
                activityBean = getActivityBean(activity);
                activityBeanList.add(activityBean);
            }
            LOGGER.info("Retrieved activities number is " + activityBeanList.size());
            return new MsgModel(activityBeanList, "get all activities success", true);

        }
        return new MsgModel(null, "get all activities failed!", false);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public Object deleteActivitiesById(@PathVariable Long id) {
        LOGGER.info("Service to call DELETE activities by id");
        if (id == null || id <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        activityDao.delete(id);
        return new MsgModel(null, "delete activities by id success", true);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Object updateActivitiesById(@PathVariable Long id, ActivityBean activityBean){//update/
        LOGGER.info("Service to call PUT activities by id");
        if (id == null || id <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        if(activityBean == null){
            LOGGER.error("update activity data is empty or null!");
            return new MsgModel(null, "update activity data is null or empty", false);
        }
        if(!activityDao.exists(id)){
            LOGGER.warn("Specified id is not exited! for update activity.");
            return new MsgModel(null, "update activity fail due to id not exits",false);
        }
        Activity activity = activityDao.getOne(id);
        if(activityBean.getTitle()!=null){
            activity.setTitle(activityBean.getTitle());
            LOGGER.info("title is updated!");
        }
        if(activityBean.getContact()!=null){
            activity.setContact(activityBean.getContact());
            LOGGER.info("title is updated!");
        }
        if(activityBean.getDescription()!=null){
            activity.setDescription(activityBean.getDescription());
            LOGGER.info("desc is updated!");
        }
        if(activityBean.getStart_time()!=null){
            activity.setStart_time(activityBean.getStart_time());
            LOGGER.info("start time is updated!");
        }
        if(activityBean.getEnd_time()!=null){
            activity.setEnd_time(activityBean.getEnd_time());
            LOGGER.info("end time is updated!");
        }
        if(activityBean.getActivity_place()!=null){
            activity.setActivity_place(activityBean.getActivity_place());
            LOGGER.info("activity place is updated!");
        }
        if(activityBean.getCapacity()!=null){
            activity.setCapacity(activityBean.getCapacity());
            LOGGER.info("capacity is updated!");
        }

        //update
        activityDao.save(activity);
        return new MsgModel(null,"update activities success",true);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object createActivity(ActivityBean activityBean){
        LOGGER.info("Service to call POST activity");
        Activity activity = new Activity();
        activity.setTitle(activityBean.getTitle());
        activity.setContact(activityBean.getContact());
        activity.setDescription(activityBean.getDescription());
        activity.setStart_time(activityBean.getStart_time());
        activity.setEnd_time(activityBean.getEnd_time());
        activity.setActivity_place(activityBean.getActivity_place());
        activity.setCapacity(activityBean.getCapacity());
        activity.setDescription(activityBean.getDescription());

        activity.setPublisher(activityBean.getPublisher());
        activity.setEnrolled(activity.getEnrolled());
        activity.setCreated_at(new Date());

        activityDao.save(activity);
        return new MsgModel(null,"create activities success",true);
    }


    private ActivityBean getActivityBean(Activity activity) {
        ActivityBean activityBean = new ActivityBean();
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

        return activityBean;
    }

}
