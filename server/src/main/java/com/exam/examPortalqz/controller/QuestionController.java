package com.exam.examPortalqz.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.exam.examPortalqz.entities.Question;
import com.exam.examPortalqz.entities.Quiz;
import com.exam.examPortalqz.service.QuestionService;
import com.exam.examPortalqz.service.QuizService;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
	@Autowired
	private QuestionService qstnService;
	
	@Autowired
	private QuizService quizService;
  
	//add
	@PostMapping("/")
	public ResponseEntity<?> addQuestion(@RequestBody Question qstn){
		return qstnService.addQuestion(qstn);
	}
	
	//update
	@PutMapping("/")
	public ResponseEntity<?> updateQuestion(@RequestBody Question qstn){
		return qstnService.updateQuestion(qstn);
	}
	
	
	//getQstnById
	@GetMapping("/{qstnId}")
		public ResponseEntity<?> getQuestionById(@PathVariable("qstnId") Long qstnId){
			return qstnService.getQuestionById(qstnId);
		}
	
	//getAllQuestion
		@GetMapping("/")
			public ResponseEntity<?> getAllQuestions(){
				return qstnService.getAllQuestion();
			}
		
		//getQuestionByQuiz
		@SuppressWarnings({ "rawtypes", "unchecked" })
		@GetMapping("/quiz/{quizid}")
		public ResponseEntity<?> getnoOfQuestionByQuiz(@PathVariable("quizid") Long quizid){
//			Quiz quiz=new Quiz();
//			quiz.setqId(quizid);
//			return qstnService.getQuestionOfQuiz(quiz);
			
			Quiz quiz=this.quizService.getQuizById(quizid);
			
			Set<Question> questn = quiz.getQuestn();
			List list=new ArrayList(questn);
			
			if(list.size()>Integer.parseInt(quiz.getNumberofQuestion())){
				list=list.subList(0, Integer.parseInt(quiz.getNumberofQuestion()+1));
			}
			return new ResponseEntity(list,HttpStatus.OK);
			
		}
		
		//delete Question
		@DeleteMapping("/{questionId}")
		public ResponseEntity<?> deleteQuestion(@PathVariable("questionId") Long quizid){
			return qstnService.deleteQuestion(quizid);
		}
		
		@SuppressWarnings({ "unchecked", "rawtypes" })
		@PostMapping("/validatemark")
		public ResponseEntity<?>validateQuiz(@RequestBody List<Question> qstn){
			return new ResponseEntity(qstnService.totalmark(qstn),HttpStatus.OK) ;
			
		}
}
