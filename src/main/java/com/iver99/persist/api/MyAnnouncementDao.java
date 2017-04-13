package com.iver99.persist.api;

import com.iver99.entity.MyActivity;
import com.iver99.entity.MyAnnouncement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by chehao on 2017/4/13 13:36.
 */
public interface MyAnnouncementDao  extends JpaRepository<MyAnnouncement, Long> {

    @Query("select t from MyAnnouncement t where t.user_id=?1")
    public List<MyAnnouncement>  getMyAnnoucementByUserId(Long userId);

    @Query("select t from MyAnnouncement t where t.user_id=?1 and t.announcement_id=?2")
    public List<MyAnnouncement> getMyAnnouncementByUserIdAndAnnoucementId(Long announcementId, Long userId);
}
