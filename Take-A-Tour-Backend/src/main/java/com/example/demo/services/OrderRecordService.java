package com.example.demo.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Orderrecord;
import com.example.demo.entities.Tourist;
import com.example.demo.repositories.OrderRecordRepository;

@Service
public class OrderRecordService {

	@Autowired
	OrderRecordRepository orderrepo;
	public Orderrecord insertrecordFinal(Orderrecord orderobj) {
		
		return orderrepo.save(orderobj);
	}
	public Orderrecord Ordergetbyid(int orderid) {
		
		Optional<Orderrecord> opt = orderrepo.findById(orderid);
		Orderrecord t = null;
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
	
	

}