package com.exam.examPortalqz.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examPortalqz.entities.Catagory;
import com.exam.examPortalqz.entities.Quiz;

public interface QuizRepo extends JpaRepository<Quiz, Long> {
	
	public List<Quiz> findByCatagory(Catagory catagory);

}
