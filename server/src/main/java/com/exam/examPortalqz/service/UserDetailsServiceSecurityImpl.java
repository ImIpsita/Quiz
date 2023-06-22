package com.exam.examPortalqz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exam.examPortalqz.Repo.UserRepo;
import com.exam.examPortalqz.entities.User;

@Service
public class UserDetailsServiceSecurityImpl implements UserDetailsService {

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		
		User user = this.userRepo.findByuserName(username);
		
		if(user==null) {
			System.out.println("Invalid credential");
			throw new UsernameNotFoundException("No user Found!!");
		}
		return user;
	}

}
