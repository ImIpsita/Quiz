package com.exam.examPortalqz.service;

import java.util.Set;

import javax.activation.MailcapCommandMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.exam.examPortalqz.Repo.RoleRepo;
import com.exam.examPortalqz.Repo.UserRepo;
import com.exam.examPortalqz.entities.User;
import com.exam.examPortalqz.entities.UserRoleMap;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	RoleRepo roleRepo;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseEntity<?> createuser(User userDetails, Set<UserRoleMap> userRoleDetails) throws Exception {
		User user = userRepo.findByuserName(userDetails.getUsername());
		if(user!=null) {
			System.out.println("UserName already exist");
			return new ResponseEntity("UserName already exist",HttpStatus.PRECONDITION_FAILED);
		}else {
			
			//saving the role info in TBL_ROLES
			for(UserRoleMap role: userRoleDetails) {
				roleRepo.save(role.getRole());
			}
			
			//saving user details with role
			userDetails.getUserRoles().addAll(userRoleDetails);
			userRepo.save(userDetails);
		   }
		return new ResponseEntity(userDetails,HttpStatus.OK);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseEntity<?> findUserByUserName(String userName) throws Exception {
		User user=userRepo.findByuserName(userName);
		 if(user==null) {
			 return new ResponseEntity("UserName Not Found : "+userName,HttpStatus.PRECONDITION_FAILED);
		 }else {
			 return new ResponseEntity(user,HttpStatus.OK);
		 }
	}
	
		
	

}
