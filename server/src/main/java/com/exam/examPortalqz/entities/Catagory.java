package com.exam.examPortalqz.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "TBL_CATAGORYITEM")
public class Catagory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long catId;
	
	private String title;
	
	private String description;
	
	@OneToMany(mappedBy = "catagory",cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<Quiz>quizz = new HashSet<>();

	public Catagory() {
		super();
	}

	public Catagory(String title, String description, Set<Quiz> quizz) {
		super();
		this.title = title;
		this.description = description;
		this.quizz = quizz;
	}

	public Long getCatId() {
		return catId;
	}

	public void setCatId(Long catId) {
		this.catId = catId;
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

	public Set<Quiz> getQuizz() {
		return quizz;
	}

	public void setQuizz(Set<Quiz> quizz) {
		this.quizz = quizz;
	}
	
	
	
	

}
