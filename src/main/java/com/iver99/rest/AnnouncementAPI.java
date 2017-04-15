package com.iver99.rest;

import com.iver99.bean.ActivityBean;
import com.iver99.bean.AnnouncementBean;
import com.iver99.entity.Activity;
import com.iver99.entity.Announcement;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.AnnouncementDao;
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
 * Created by chehao on 2017/4/13 9:15.
 */
@RestController
@RequestMapping("/v1/announcement")
public class AnnouncementAPI {
    Logger LOGGER = LogManager.getLogger(AnnouncementAPI.class);
    @Autowired
    AnnouncementDao announcementDao;

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Object getAnnouncementById(@PathVariable Long id){
        if (id == null || id <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        Announcement announcement = announcementDao.getOne(id);
        AnnouncementBean announcementBean = null;

        if(announcement!=null){
            announcementBean = new AnnouncementBean();
            setAnnouncementBean(announcement, announcementBean);
            return new MsgModel(announcementBean,"get announcement by id success",true);
        }
        return new MsgModel(null,"get announcement by id failed", false);

    }

    @RequestMapping( method = RequestMethod.GET)
    public Object getAnnouncements(){
        List<Announcement> announcementList = announcementDao.findAll();
        List<AnnouncementBean> list = new ArrayList<>();
        AnnouncementBean announcementBean = null;
        if(announcementList!=null && !announcementList.isEmpty()){
            announcementBean = new AnnouncementBean();
            for(Announcement announcement: announcementList){
                setAnnouncementBean(announcement, announcementBean);
                list.add(announcementBean);
            }
            LOGGER.info("Retrieved annoucement list size is "+list.size());
            return new MsgModel(list, "get all announcement success",true);

        }

        return new MsgModel(null, "get all announcement fail", true);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public Object deleteAnnouncementById(@PathVariable Long id) {
        LOGGER.info("Service to call DELETE announcement by id");
        if (id == null || id <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        announcementDao.delete(id);
        return new MsgModel(null, "delete announcemenet by id success", true);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object createActivity(AnnouncementBean announcementBean){
        LOGGER.info("Service to call POST activity");
        Announcement announcement = new Announcement();
        announcement.setTitle(announcementBean.getTitle());
        announcement.setId(announcementBean.getId());
        announcement.setCreate_time(new Date());
        announcement.setDescription(announcementBean.getDescription());
        announcement.setCreate_time(announcementBean.getCreate_time());
        announcement.setCreate_id(announcementBean.getCreate_id());

        announcementDao.save(announcement);
        return new MsgModel(null,"create announcement success",true);
    }

    private void setAnnouncementBean(Announcement announcement, AnnouncementBean announcementBean) {
        announcementBean.setDescription(announcement.getDescription());
        announcementBean.setCreate_id(announcement.getCreate_id());
        announcementBean.setCreate_time(announcement.getCreate_time());
        announcementBean.setId(announcement.getId());
        announcementBean.setTitle(announcement.getTitle());
    }
}
