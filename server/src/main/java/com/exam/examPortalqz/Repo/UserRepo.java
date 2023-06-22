package com.exam.examPortalqz.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examPortalqz.entities.User;

public interface UserRepo extends JpaRepository<User,Long> {
	
  public User findByuserName(String userName);

}
