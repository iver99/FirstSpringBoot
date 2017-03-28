package com.iver99.rest;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import java.util.*;
import javax.persistence.EntityNotFoundException;



@Controller
@RequestMapping("/")
public class indexController {

	@RequestMapping("/")
	public String homePage() {
		return "index";
	}

	@RequestMapping("/login")
	public String login(String username, String password, Map<String, Object> map) {
		// for freemarker test 
		map.put("name", username);
		map.put("pswd", password);
		
		// TODO 

		return "index";
	}

	@RequestMapping("/register")
	public String register(String usernamesignup, String emailsignup, String passwordsignup) {
		// TODO 

		return "index";
	}

    @RequestMapping(value = "/modelTest")
    public String index(Model model) {  
        model.addAttribute("KEY", "VALUE");  
        return "index";  
    }  
}