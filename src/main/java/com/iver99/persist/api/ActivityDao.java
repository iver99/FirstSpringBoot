package com.iver99.persist.api;

import com.iver99.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by chehao on 2017/4/12 9:39.
 */
public interface ActivityDao extends JpaRepository<Activity,Long> {
}
