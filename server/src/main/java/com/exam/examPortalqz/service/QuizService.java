package com.exam.examPortalqz.service;

import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.exam.examPortalqz.entities.Catagory;
import com.exam.examPortalqz.entities.Quiz;

public interface QuizService {
	
	 public ResponseEntity<?> addQuiz(Quiz quiz);
	 
	 public ResponseEntity<?> updateQuiz(Quiz quiz);
	 
	 public ResponseEntity<?> getAllQuizs();
	 
	 public Quiz getQuizById(Long quizId);
	 
	 public ResponseEntity<?> deleteQuizById(Long quizId);
	 
	 public List<Quiz> getAllQuizzesByCatagories (Long catId);

}
