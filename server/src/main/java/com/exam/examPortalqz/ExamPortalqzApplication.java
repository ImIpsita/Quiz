package com.exam.examPortalqz;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.exam.examPortalqz.entities.RoleInfo;
import com.exam.examPortalqz.entities.User;
import com.exam.examPortalqz.entities.UserRoleMap;
import com.exam.examPortalqz.service.UserService;

@SpringBootApplication
@CrossOrigin("*")
public class ExamPortalqzApplication implements CommandLineRunner {
	
	@Autowired
	BCryptPasswordEncoder bycrypt;
		
	@Autowired
	UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(ExamPortalqzApplication.class, args);
		System.out.println("Application started!!");
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("code started");
		
		User createUser =  new User();
		createUser.setUserName("Ipsita");
		createUser.setPassword(bycrypt.encode("ip@123"));
		createUser.setFirstName("Ipsita");
		createUser.setLastName("Panda");
		createUser.setMobileNo("6370153986");
		createUser.setUserId(10L);
		
		RoleInfo roledetails = new RoleInfo();
		roledetails.setRoleName("ADMIN");
		roledetails.setRoleId(100L);
		 
		Set<UserRoleMap> userole=new HashSet<>();
		UserRoleMap userrolemap=new UserRoleMap();
		userrolemap.setUser(createUser);
		userrolemap.setRole(roledetails);
		userrolemap.setUserRoleMapId(1000L);
		userole.add(userrolemap);
		
		ResponseEntity<?> createuser2 = userService.createuser(createUser, userole);
		System.out.println(createuser2.getStatusCode());
		
		
		
	}
}