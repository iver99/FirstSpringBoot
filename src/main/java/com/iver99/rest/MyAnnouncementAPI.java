package com.iver99.rest;

import com.iver99.entity.Announcement;
import com.iver99.entity.MyAnnouncement;
import com.iver99.model.MsgModel;
import com.iver99.persist.api.AnnouncementDao;
import com.iver99.persist.api.MyActivityDao;
import com.iver99.persist.api.MyAnnouncementDao;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

/**
 * Created by chehao on 2017/4/13 13:32.
 */
@RestController
@RequestMapping("/v1/myAnnouncement")
public class MyAnnouncementAPI {
    Logger LOGGER = LogManager.getLogger(MyAnnouncementAPI.class);
    @Autowired
    MyAnnouncementDao myAnnouncementDao;
    @Autowired
    AnnouncementDao announcementDao;
    @Autowired
    MyActivityDao myActivityDao;

    @RequestMapping(value = "{userId}", method = RequestMethod.GET)
    public Object getAnnouncementByUserId(@PathVariable Long userId){
        if (userId == null || userId <= 0) {
            LOGGER.error("id cannot be null!");
            return new MsgModel(null, "Id is not correct", false);
        }
        List<Long> activityIdList = myActivityDao.getSubscribedOrEnrolledActivity(userId);
        String ids = "";
        if(activityIdList !=null && !activityIdList.isEmpty()){
            for(int i = 0; i <activityIdList.size();i++){
                if(i==activityIdList.size()-1){
                    ids+=activityIdList.get(i);
                    continue;
                }
                ids+=activityIdList.get(i)+",";
            }
        }else{
            return new MsgModel(Collections.emptyList(),"empty",true);
        }
        LOGGER.info("ids is "+ids);
        List<Announcement> announcementList = announcementDao.getUserAnnouncement(activityIdList);
//        List<MyAnnouncement> myAnnouncementList = new ArrayList<>();
//        myAnnouncementList = myAnnouncementDao.getMyAnnoucementByUserId(userId);
        /*ist<Long> idList = new ArrayList<>();
        if(myAnnouncementList!=null && !myAnnouncementList.isEmpty()){
            for(MyAnnouncement myAnnouncement:myAnnouncementList){
                idList.add(myAnnouncement.getAnnouncement_id());
            }
        }
        List<Announcement>  announcementList;
        if(!idList.isEmpty()){
            announcementList = announcementDao.findAll(idList);
            LOGGER.info("Retrieved my announcement size is "+announcementList.size());
        }*/
        return new MsgModel(announcementList,"get user announcement list success",true);

//        return new MsgModel(null,"get My activity by user id failed", false);

    }

    @RequestMapping(method = RequestMethod.DELETE)
    public Object deleteMyAnno(Long announcementId, Long userId){
        LOGGER.info("Service to call delete usre announment success "+announcementId + " "+userId);
        List<MyAnnouncement> myAnnouncement = myAnnouncementDao.getMyAnnouncementByUserIdAndAnnoucementId(announcementId,userId);
        LOGGER.info("Retrieved my announcement size is "+myAnnouncement.size());
        Long myAnnouncementId = null;
        if(myAnnouncement!=null && !myAnnouncement.isEmpty()){
            myAnnouncementId = myAnnouncement.get(0).getId();
        }
        if(myAnnouncementId!=null){
            LOGGER.info("announcement id is "+myAnnouncementId);
            myAnnouncementDao.delete(myAnnouncementId);
            return new MsgModel(null,"delete announcement success", true);
        }
        LOGGER.info("announcement id is null!");
        return new MsgModel(null,"delete announcement fail", false);
//        myAnnouncementDao.delete(annoucementId);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object addMyAnnounce(Long userId, Long announcementId){
        MyAnnouncement myAnnouncement = new MyAnnouncement();
        myAnnouncement.setUser_id(userId);
        myAnnouncement.setStatus(1);
        myAnnouncement.setTime(new Date());
        myAnnouncement.setAnnouncement_id(announcementId);
        myAnnouncementDao.save(myAnnouncement);
        LOGGER.info("Service to call add new my announcement");
        return new MsgModel(null, "add user announcement success", true);

    }
}
