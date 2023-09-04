package com.example.demo.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Tourist;
import com.example.demo.repositories.TouristRegRepository;

@Service
public class TouristRegService 
{
	@Autowired
	TouristRegRepository regrepo;

	public Tourist saveTourist(Tourist d)
	{
		return regrepo.save(d);
	}
//	
//	public Tourist getTourist(int id)
//	{
//
//		Optional<Tourist> opt = regrepo.findById(id);
//		Tourist t = null;
//		try
//		{
//			t = opt.get();
//		}
//		catch(NoSuchElementException e)
//		{
//			t = null;
//		}
//		return t;
//		
//	}

	//get tourist by its primary key tourist if id for booking tour
	public Tourist getTouristByIdForBooking(int id)
	{

		Optional<Tourist> opt = regrepo.findById(id);
		Tourist t = null;
		try
		{
			t = opt.get();
		}
		catch(NoSuchElementException e)
		{
			t = null;
		}
		return t;
		
	}
	public Tourist getTourist(int id)
   {
		return regrepo.getTourist(id);
   }
	public Tourist getTourist(String uid) 
	{
		// TODO Auto-generated method stub
		return regrepo.getTourist(uid);
	}
	
}