package com.iver99.rest;

import com.iver99.persist.api.TestDao;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import java.awt.print.Book;

/**
 * Created by chehao on 2016/12/5.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TestAPI.class)
@WebIntegrationTest("server.port:0")
public class TestAPITest {
    @Autowired
    private WebApplicationContext context;
    @Autowired
    private TestDao testDao;
    @Value("${local.server.port}")
    private int port;

    private MockMvc mockMvc;
    private RestTemplate restTemplate = new TestRestTemplate();

    @Before
    public void setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void contextLoads() {
        Assert.assertEquals(1, testDao.count());
    }

    /*@Test
    public void test() {
        System.out.println("http://localhost:" + port +"/test");
        com.iver99.entity.Test t = restTemplate.getForObject("http://localhost:" + port +"/test", com.iver99.entity.Test.class);
        Assert.assertNotNull(t);
        Assert.assertEquals("1", t.getId().toString());
    }*/

    /*@Test
    public void webappPublisherApi() throws Exception {
        //MockHttpServletRequestBuilder.accept方法是设置客户端可识别的内容类型
        //MockHttpServletRequestBuilder.contentType,设置请求头中的Content-Type字段,表示请求体的内容类型
        mockMvc.perform(get("/publishers/1")
                .accept(MediaType.APPLICATION_JSON_UTF8))

                .andExpect(status().isOk())
                .andExpect(content().string(containsString("中文测试")))
                .andExpect(jsonPath("$.name").value("中文测试"));
    }*/
}
