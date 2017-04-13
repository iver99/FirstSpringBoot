package com.iver99.bean;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.iver99.util.CustomDateSerializer;

import java.util.Date;

/**
 * Created by chehao on 2017/4/13 9:10.
 */
public class AnnouncementBean {
    private Long id;
    private String title;
//    @JsonSerialize(using = CustomDateSerializer.class)
    private Date create_time;
    private Long create_id;
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Date create_time) {
        this.create_time = create_time;
    }

    public Long getCreate_id() {
        return create_id;
    }

    public void setCreate_id(Long create_id) {
        this.create_id = create_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
