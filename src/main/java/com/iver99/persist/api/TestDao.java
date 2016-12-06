package com.iver99.persist.api;

import com.iver99.entity.Test;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

/**
 * Created by chehao on 2016/12/3.
 */
@Repository
public interface TestDao extends JpaRepository<Test,Long> {

}
