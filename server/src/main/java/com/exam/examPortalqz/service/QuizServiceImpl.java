package com.exam.examPortalqz.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.exam.examPortalqz.Repo.QuizRepo;
import com.exam.examPortalqz.entities.Catagory;
import com.exam.examPortalqz.entities.Quiz;

@Service
public class QuizServiceImpl implements QuizService{
	
	@Autowired
	private QuizRepo quizRepo;
	
	@Autowired
	private CatagoryService catagoryService;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> addQuiz(Quiz quiz) {
		Quiz addQuiz = quizRepo.save(quiz);
		if(null == addQuiz) {
			return new ResponseEntity(quiz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity(quiz,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> updateQuiz(Quiz quiz) {
		Quiz updateQuiz = quizRepo.save(quiz);
		if(null == updateQuiz) {
			return new ResponseEntity(quiz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity(quiz,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> getAllQuizs() {
		List<Quiz> findAllQuiz = quizRepo.findAll();
		if(findAllQuiz.isEmpty()) {
			return new ResponseEntity("No QuizList Found",HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity(findAllQuiz,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Quiz getQuizById(Long quizId) {
		 Quiz findByQuizId = quizRepo.findById(quizId).get();
		   if(null != findByQuizId) {
			   return this.quizRepo.findById(quizId).get();
		   }
		   return quizRepo.findById(quizId).get();
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> deleteQuizById(Long quizId) {
		quizRepo.deleteById(quizId);
		return new ResponseEntity(quizId,HttpStatus.OK);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Quiz> getAllQuizzesByCatagories(Long cat) {
		
		//Catagory catagory=new Catagory();
	 Catagory catagoryById = catagoryService.getCatagoryById(cat);
		
	 Set<Quiz> quizz = catagoryById.getQuizz();
	 @SuppressWarnings("rawtypes")
	List list=new ArrayList(quizz);
	 
	      if(list.isEmpty()) {
	    	  return list;
	      }
		
		
		return list;
		
		//return this.quizRepo.findByCatagory(cat);
		
		
		
	}

}
