package com.iver99.persist.api;

import com.iver99.entity.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by chehao on 2017/4/13 9:15.
 */
public interface AnnouncementDao extends JpaRepository<Announcement,Long> {
}
