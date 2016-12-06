package com.iver99;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by chehao on 2016/12/6.
 */
public class LogTest {

    private final Logger logger= LoggerFactory.getLogger(getClass());

    @Test
    public void testLog(){
        logger.info("info");
        logger.debug("debug");
        logger.error("error");
    }
}
