package com.exam.examPortalqz.controller;

import java.security.Principal;

import org.apache.tomcat.util.buf.UEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.examPortalqz.config.JwtUtil;
import com.exam.examPortalqz.entities.JWT;
import com.exam.examPortalqz.entities.JwtResponse;
import com.exam.examPortalqz.entities.User;
import com.exam.examPortalqz.service.UserService;

@RestController
@CrossOrigin("*")
public class AuthenticateController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserDetailsService userSecutity;

	@Autowired
	JwtUtil jwt;
	
	
    @PostMapping("/generateToken")
	public ResponseEntity<?> generateToken(@RequestBody JWT jwtRequestToken) throws Exception {

		try {
			authenticate(jwtRequestToken.getUserName(), jwtRequestToken.getPassword());

		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("User not found" + e.getMessage());
		}

		UserDetails userDetails = userSecutity.loadUserByUsername(jwtRequestToken.getUserName());

		String token = jwt.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));

	}

	// authenticate userdetails
	private void authenticate(String userName, String password) throws Exception {

		try {
			Authentication authenticate = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(userName, password));

		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Invalid credential" + e.getMessage());
		}
	}

	//getting currentUserDetails
	@GetMapping("/currentUser")
	public User getCurrentUserDetails(Principal principal) {
		return (User) userSecutity.loadUserByUsername(principal.getName());
		
	}

}
