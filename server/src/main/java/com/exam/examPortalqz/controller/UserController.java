package com.exam.examPortalqz.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.examPortalqz.entities.RoleInfo;
import com.exam.examPortalqz.entities.User;
import com.exam.examPortalqz.entities.UserRoleMap;
import com.exam.examPortalqz.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	BCryptPasswordEncoder bycrypt;
	
	@PostMapping("/add")
	public ResponseEntity<?> createUser(@RequestBody User userInfo) throws Exception{
		
		//Bycrypt password 
		userInfo.setPassword(bycrypt.encode(userInfo.getPassword()));
		
		
		Set<UserRoleMap> userRoleDetails = new HashSet<>();
		RoleInfo role=new RoleInfo();
		role.setRoleId(1L);
		role.setRoleName("NORMAL");
		
		UserRoleMap userMap=new UserRoleMap();
		userMap.setUser(userInfo);
		userMap.setRole(role);
		
		userRoleDetails.add(userMap);
		return userService.createuser(userInfo, userRoleDetails);
	}	
	
	@GetMapping("/{username}")
	public ResponseEntity<?> findUserByUserName(@PathVariable("username") String username) throws Exception {
		return userService.findUserByUserName(username);
	}


}
