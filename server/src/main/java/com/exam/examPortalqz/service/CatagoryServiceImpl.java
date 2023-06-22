package com.exam.examPortalqz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.exam.examPortalqz.Repo.CatagoryRepo;
import com.exam.examPortalqz.entities.Catagory;

@Service
public class CatagoryServiceImpl implements CatagoryService{
	
	@Autowired
	private CatagoryRepo catagoryRepo;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseEntity<?> addcatagory(Catagory catagory) {
		// TODO Auto-generated method stub
		Catagory addCatagory = catagoryRepo.save(catagory);
		return new ResponseEntity(addCatagory,HttpStatus.OK);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> updatecatagory(Catagory catagory) {
		// TODO Auto-generated method stub
		Catagory updateCatagory = catagoryRepo.save(catagory);
		  if(null == updateCatagory) {
		return new ResponseEntity(updateCatagory,HttpStatus.INTERNAL_SERVER_ERROR);
		  }
		  return new ResponseEntity(updateCatagory,HttpStatus.OK);
	  } 
	

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public ResponseEntity<?> getAllCatagories() {
		List<Catagory> allCatagoryList = catagoryRepo.findAll();
		if(!allCatagoryList.isEmpty()) {
			return new ResponseEntity(allCatagoryList,HttpStatus.OK);
		}
		return new ResponseEntity("No allCatagoryList",HttpStatus.NO_CONTENT);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Catagory getCatagoryById(Long catagoryId) {
		Catagory catagory = catagoryRepo.findById(catagoryId).get();
		     if(null ==catagory)
		     {
		    	 System.out.println("catagory name not found"+catagoryId);
		    	 return catagory;
		     }
		return catagory;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public ResponseEntity<?> deleteCatagoryById(Long catagoryId) {
		
		catagoryRepo.deleteById(catagoryId);
		
		return new ResponseEntity(catagoryId,HttpStatus.OK);

}
	
}
