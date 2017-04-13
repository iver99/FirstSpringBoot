package com.iver99.persist.api;

import com.iver99.entity.Test;
import com.iver99.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by chehao on 2017/4/13 10:02.
 */
public interface UserInfoDao extends JpaRepository<UserInfo,Long> {

    @Query("select u from UserInfo u where u.username = ?1 and u.password =?2")
    UserInfo checkLogin(String username,String password);
}
