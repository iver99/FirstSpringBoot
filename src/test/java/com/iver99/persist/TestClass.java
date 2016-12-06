/*

package com.iver99.persist;

import com.iver99.entity.Test;
import com.iver99.persist.api.TestDao;
import org.junit.Assert;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;


*/
/**
 * Created by chehao on 2016/12/3.
 *//*


@ContextConfiguration
@EnableAutoConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ComponentScan("com.iver99.*")
@EnableJpaRepositories("com.iver99.*")
@EntityScan("com.iver99.*")
@WebAppConfiguration
public class TestClass {

    @Autowired
    TestDao testDao;
    @org.junit.Test
    public void testDB(){
        Test t=testDao.getOne(1L);
        Assert.assertNotNull(t);
    }
}

*/
