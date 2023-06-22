package com.exam.examPortalqz.service;

import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.exam.examPortalqz.entities.User;
import com.exam.examPortalqz.entities.UserRoleMap;

public interface UserService {
	
	//public UserDetails createuser(UserDetails userDetails,Set<UserRoleMap>userRoleDetails) ;
	//public UserDetails findUserByUserName(String userName) ;
	
	public ResponseEntity<?> createuser(User userDetails,Set<UserRoleMap>userRoleDetails) throws Exception;
	public ResponseEntity<?> findUserByUserName(String userName) throws Exception ;
}
