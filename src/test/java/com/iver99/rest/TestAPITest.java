package com.iver99.rest;

import com.iver99.persist.api.TestDao;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import java.awt.print.Book;

import static org.hamcrest.core.StringContains.containsString;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by chehao on 2016/12/5.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TestAPI.class)
@WebIntegrationTest("server.port:0")
@TransactionConfiguration(defaultRollback = true)
@Transactional
public class TestAPITest {
    @Autowired
    private WebApplicationContext context;
    @Autowired
    private TestDao testDao;
    @Value("${local.server.port}")
    private int port;
    private com.iver99.entity.Test t;

    private MockMvc mockMvc;
    private RestTemplate restTemplate = new TestRestTemplate();

    @Before
    public void setupMockMvc() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

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
    @Test
    public void testGetAPI() throws Exception {
        this.mockMvc.perform(get("/test/"+t.getId()).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("Test Name")))
                .andExpect(content().string(containsString("Test Address")));

    }
    @Test
    public void testInsertAPI()throws Exception{
        String s=this.mockMvc.perform(post("/test")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("name","James")
                .param("address","CLE"))
                .andExpect(status().isOk())
                .andDo(print())         //打印出请求和相应的内容
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串;
//        com.iver99.entity.Test t =(com.iver99.entity.Test)(JSONObject.stringToValue(s));
    }
    @Test
    public void testUpdateAPI()throws Exception{
        this.mockMvc.perform(put("/test")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("id",t.getId().toString())
                .param("name","testUpdate"))
                .andExpect(status().isOk());
    }
    @Test
    public void testDeleteAPI()throws Exception{
        //create a new one first
        String s=this.mockMvc.perform(post("/test")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("name","testDelete")
                .param("address","testDelete"))
                .andExpect(status().isOk())
                .andDo(print())         //打印出请求和相应的内容
                .andReturn().getResponse().getContentAsString();   //将相应的数据转换为字符串;
        JSONObject resultObj=new JSONObject(s);
        Long id = resultObj.getLong("id");
        this.mockMvc.perform(delete("/test/"+id).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Before
    public void setup(){
        t=new com.iver99.entity.Test();
        t.setName("Test Name");
        t.setAddress("Test Address");
        t=testDao.save(t);

    }

    @After
    public void clean(){
        testDao.delete(t.getId());
    }
   /* mockMvc.perform(post("/user").param("name", "zhang")) //执行传递参数的POST请求(也可以post("/user?name=zhang"))
            .andExpect(handler().handlerType(UserController.class)) //验证执行的控制器类型
            .andExpect(handler().methodName("create")) //验证执行的控制器方法名
            .andExpect(model().hasNoErrors()) //验证页面没有错误
            .andExpect(flash().attributeExists("success")) //验证存在flash属性
            .andExpect(view().name("redirect:/user")); //验证视图  */

}
