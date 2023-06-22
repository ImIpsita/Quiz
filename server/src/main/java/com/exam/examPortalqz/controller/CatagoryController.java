package com.exam.examPortalqz.controller;

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
import com.exam.examPortalqz.service.CatagoryService;

@RestController
@RequestMapping("/catagory")
@CrossOrigin("*")
public class CatagoryController {
	
	@Autowired
	private CatagoryService catagoryService;
 
	//add catagory
	
	@PostMapping("/")
	public ResponseEntity<?> addcatagory(@RequestBody Catagory catagory) {
		return catagoryService.addcatagory(catagory);
	}
	
	//update catagory
	
	@PutMapping("/")
	public ResponseEntity<?> updatecatagory(@RequestBody Catagory catagory){
		return catagoryService.updatecatagory(catagory);
		
	}
	
	//getCatagory
	@GetMapping("/{catagoryId}")
	public Catagory getCatagoryById(@PathVariable("catagoryId") Long catagoryId){
		return catagoryService.getCatagoryById(catagoryId);
		
	}
	
	//getAllCatagories
	
	@GetMapping("/")
	public ResponseEntity<?>getAllCatagories(){
		return catagoryService.getAllCatagories();
		
	}
	
	@DeleteMapping("/{catagoryId}")
	public ResponseEntity<?> deletecatagory(@PathVariable("catagoryId") Long catagoryId){
		return catagoryService.deleteCatagoryById(catagoryId);
		
	}
	
	
	
	 
	  
}
