package com.exam.examPortalqz.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.exam.examPortalqz.entities.Question;
import com.exam.examPortalqz.entities.Quiz;

public interface QuestionService {
	
	public ResponseEntity<?> addQuestion(Question qstn);
	
	public ResponseEntity<?> updateQuestion(Question qstn);
	
	public ResponseEntity<?> getAllQuestion();
	
	public ResponseEntity<?> getQuestionById(Long qstnId);
	
	public ResponseEntity<?> getQuestionOfQuiz(Quiz quiz);
	
	
	public ResponseEntity<?> deleteQuestion(Long qstnId);
	
	public Map<String,Object> totalmark(List<Question> qstn);

}
