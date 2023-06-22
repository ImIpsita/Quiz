package com.exam.examPortalqz.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.examPortalqz.entities.Question;
import com.exam.examPortalqz.entities.Quiz;

public interface QuestionRepo extends JpaRepository<Question, Long> {
    
	public List<Question> findByQuiz(Quiz quiz);
}
