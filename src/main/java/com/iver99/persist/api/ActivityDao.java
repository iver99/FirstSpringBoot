package com.iver99.persist.api;

import com.iver99.entity.Activity;
import com.iver99.entity.MyActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by chehao on 2017/4/12 9:39.
 */
public interface ActivityDao extends JpaRepository<Activity,Long> {
    @Query("select t from Activity t where t.title like :search1 or t.description like :search2")
    public List<Activity> search(@Param("search1") String search1,@Param("search2") String search2);

}
