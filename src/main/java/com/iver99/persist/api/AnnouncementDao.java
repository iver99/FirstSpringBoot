package com.iver99.persist.api;

import com.iver99.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by chehao on 2017/4/13 9:15.
 */
public interface AnnouncementDao extends JpaRepository<Announcement,Long> {

    @Query("select t from Announcement t where t.activity_id in (:ids)")
    public List<Announcement> getUserAnnouncement(@Param("ids") List<Long> ids);
}
