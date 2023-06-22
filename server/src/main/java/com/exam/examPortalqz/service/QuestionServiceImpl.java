package com.exam.examPortalqz.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.exam.examPortalqz.Repo.QuestionRepo;
import com.exam.examPortalqz.entities.Question;
import com.exam.examPortalqz.entities.Quiz;

@Service
public class QuestionServiceImpl implements QuestionService {
	
	@Autowired
	private QuestionRepo qstnRepo;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> addQuestion(Question qstn) {
		Question addQstn = qstnRepo.save(qstn);
		    if(addQstn ==null) {
		    	return new ResponseEntity("Question not added",HttpStatus.INTERNAL_SERVER_ERROR);
		    }
		return new ResponseEntity(addQstn,HttpStatus.OK);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseEntity<?> updateQuestion(Question qstn) {
		Question update = qstnRepo.save(qstn);
	    if(update ==null) {
	    	return new ResponseEntity("Question not updated"+qstn.getQstnId(),HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	return new ResponseEntity(update,HttpStatus.OK);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseEntity<?> getAllQuestion() {
		List<Question> allqstnList = qstnRepo.findAll();
		if(allqstnList.isEmpty()) {
			return new ResponseEntity(allqstnList,HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity(allqstnList,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> getQuestionById(Long qstnId) {
		Question getQstnById = qstnRepo.findById(qstnId).get();
		  if(getQstnById == null) {
			  return new ResponseEntity(getQstnById,HttpStatus.NO_CONTENT);
		  }
		return new ResponseEntity(getQstnById,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> getQuestionOfQuiz(Quiz quiz) {
		List<Question> questionByQuiz = qstnRepo.findByQuiz(quiz);
		  if(questionByQuiz.isEmpty()) {
			  return new ResponseEntity(questionByQuiz,HttpStatus.NO_CONTENT);
		  }
		return new ResponseEntity(questionByQuiz,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> deleteQuestion(Long qstnId) {
		qstnRepo.deleteById(qstnId);
		return new ResponseEntity(qstnId,HttpStatus.OK);
	}

	@Override
	public Map<String,Object> totalmark(List<Question> qstn) {
		
		Long correctAnswerNo=0L;
		Long perQstn=0L;
		Long securedmark=0L;
		Long attempt=0L;
		Long totallength=(long) qstn.size();
		if(!qstn.isEmpty()) {
		for(Question q:qstn) {
			Question qstns = qstnRepo.findById(q.getQstnId()).get();
			   if(qstns.getAnswer().equalsIgnoreCase(q.getGivenAnswer())) {
				correctAnswerNo++;
			 }
			//get singlequestion mark of the quiz
			perQstn=Long.parseLong(q.getQuiz().getMaxMarks())/totallength;
			//total secured mark
			securedmark=perQstn*correctAnswerNo;
			
			//no of attempt questions
			if(null!=q.getGivenAnswer() || !q.getGivenAnswer().trim().equalsIgnoreCase("")) {
				attempt++;
			}
		}
	}
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("CorrectAnswerNo", correctAnswerNo);
		map.put("Securedmark", securedmark);
		map.put("AttemptQuestions", attempt);
		
		return map;
   }

}
