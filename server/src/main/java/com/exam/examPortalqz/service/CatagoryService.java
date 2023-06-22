package com.exam.examPortalqz.service;

import org.springframework.http.ResponseEntity;

import com.exam.examPortalqz.entities.Catagory;

public interface CatagoryService {
	
 public ResponseEntity<?> addcatagory(Catagory catagory);
 
 public ResponseEntity<?> updatecatagory(Catagory catagory);
 
 public ResponseEntity<?> getAllCatagories();
 
 public Catagory getCatagoryById(Long catagoryId);
 
 public ResponseEntity<?> deleteCatagoryById(Long catagoryId);
}
