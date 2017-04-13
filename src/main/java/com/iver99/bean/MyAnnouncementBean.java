package com.iver99.bean;

import java.util.Date;

/**
 * Created by chehao on 2017/4/13 13:33.
 */
public class MyAnnouncementBean {
    private Long id;
    private Long announcement_id;
    private Long user_id;
    private Date time;
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAnnouncement_id() {
        return announcement_id;
    }

    public void setAnnouncement_id(Long announcement_id) {
        this.announcement_id = announcement_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
