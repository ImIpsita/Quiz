package com.exam.examPortalqz.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "TBL_QUIZ")
public class Quiz {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private Long qId;
	
	private String title;
	
	private String description;
	
	private String numberofQuestion;
	
	private String maxMarks;
	
	private boolean active=false;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Catagory catagory;
	
	@OneToMany(mappedBy = "quiz",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Question>questn = new HashSet<>();

	public Quiz() {
		super();
	}

	public Long getqId() {
		return qId;
	}

	public void setqId(Long qId) {
		this.qId = qId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNumberofQuestion() {
		return numberofQuestion;
	}

	public void setNumberofQuestion(String numberofQuestion) {
		this.numberofQuestion = numberofQuestion;
	}

	public String getMaxMarks() {
		return maxMarks;
	}

	public void setMaxMarks(String maxMarks) {
		this.maxMarks = maxMarks;
	}

	public Catagory getCatagory() {
		return catagory;
	}

	public void setCatagory(Catagory catagory) {
		this.catagory = catagory;
	}

	public Set<Question> getQuestn() {
		return questn;
	}

	public void setQuestn(Set<Question> questn) {
		this.questn = questn;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	
	

}
