package com.iver99.bean;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.iver99.util.CustomDateSerializer;

import java.util.Date;

/**
 * Created by chehao on 2017/4/12 9:49.
 */
public class ActivityBean {
    private Long id;
    private String title;
//    @JsonSerialize(using = CustomDateSerializer.class)
    private Date created_at;
    private String description;
//    @JsonSerialize(using = CustomDateSerializer.class)
    private Date start_time;
//    @JsonSerialize(using = CustomDateSerializer.class)
    private Date end_time;
    private String activity_place;
    private String manager;
    private String contact;
    private Integer status;
    private Integer capacity;
    private Integer enrolled;

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

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }

    public String getActivity_place() {
        return activity_place;
    }

    public void setActivity_place(String activity_place) {
        this.activity_place = activity_place;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getEnrolled() {
        return enrolled;
    }

    public void setEnrolled(Integer enrolled) {
        this.enrolled = enrolled;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Date update_time) {
        this.update_time = update_time;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    private Date update_time;
    private String publisher;
}
