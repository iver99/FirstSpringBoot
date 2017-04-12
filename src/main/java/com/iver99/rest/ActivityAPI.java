package com.iver99.rest;

import com.iver99.bean.ActivityBean;
import com.iver99.entity.Activity;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.ActivityDao;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
            return new MsgModel(null,"Id is not correct", false);
        }
        Activity activity = activityDao.getOne(id);
        ActivityBean activityBean = null;
        if (activity != null) {
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
        }

        if (activityBean == null) {
            return new MsgModel(null,"Activity with Id" + id + " is not found!", false);
        }
        return activityBean;

    }

}
