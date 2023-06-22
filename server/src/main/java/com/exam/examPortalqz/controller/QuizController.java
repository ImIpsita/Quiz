package com.exam.examPortalqz.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.examPortalqz.entities.Catagory;
import com.exam.examPortalqz.entities.Quiz;
import com.exam.examPortalqz.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	//add quiz
	@PostMapping("/")
	public ResponseEntity<?>addQuiz(@RequestBody Quiz quiz){
		return quizService.addQuiz(quiz);
		
	}
	
	//update quiz
	@PutMapping("/")
	public ResponseEntity<?>updateQuiz(@RequestBody Quiz quiz){
		return quizService.updateQuiz(quiz);
		
	}
	
	//getQuizById
	@GetMapping("/{qId}")
	public Quiz getQuizById(@PathVariable("qId") Long quizId){
		return quizService.getQuizById(quizId);
		
	}
	 //get all Quiz
	@GetMapping("/")
	public ResponseEntity<?>getAllQuiz(){
		return quizService.getAllQuizs();
		
	}
	//delete quiz
	
	@DeleteMapping("/{quizId}")
	public ResponseEntity<?> deleteQuiz(@PathVariable("quizId") Long quizId){
		return quizService.deleteQuizById(quizId);
	}
	
	//get all quizzes by catagoryId
	@GetMapping("/catagory/{catId}")
	public List<Quiz> getAllQuizsByCatagories(@PathVariable("catId") Long catId){
		
//		Catagory c=new Catagory();
//		c.setCatId(catId);
		return quizService.getAllQuizzesByCatagories(catId);
	}
	
	
	

}
