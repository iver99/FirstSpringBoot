package com.iver99.model;

/**
 * Created by chehao on 2017/3/28 10:45.
 */
public class MsgModel {

    private boolean success;
    private String msg;
    private Object object;

    public MsgModel(Object object, String msg,boolean success) {
        this.success = success;
        this.msg = msg;
        this.object = object;
    }

    public boolean isSuccess() {

        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getObject() {
        return object;
    }

    public void setObject(Object object) {
        this.object = object;
    }
}
