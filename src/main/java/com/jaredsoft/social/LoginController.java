package com.jaredsoft.social;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

@Controller
@RequestMapping("/login")
public class LoginController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value="/authentication", method=RequestMethod.POST)
	public @ResponseBody String authenticate(@RequestParam("user") final String user,
			@RequestParam("password") final String password) {
		logger.info("login/authenticate called");
		
		GenericResponse genericResponse = new GenericResponse();
		Gson gson = new Gson();
		
		if(password.equals("password")) {
			genericResponse.setSuccess(true);
			genericResponse.setMsg("Login Successful");
		} else {
			genericResponse.setSuccess(false);
			genericResponse.setMsg("Login Failed");
		}
		
		
		String json = gson.toJson(genericResponse);
		return json;
	}
	
}
