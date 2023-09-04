package com.example.demo.controllers;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Login;
import com.example.demo.entities.Orderrecord;
import com.example.demo.entities.Role;
import com.example.demo.entities.Tourist;
import com.example.demo.entities.TouristReg;
import com.example.demo.entities.Traveller;
import com.example.demo.entities.TravellerDummy;
import com.example.demo.services.OrderRecordService;
import com.example.demo.services.TransactionService;
import com.example.demo.services.TravellerService;

@CrossOrigin(origins = "*")
@RestController
public class TravellerController 
{

	@Autowired
	OrderRecordService orderservice;
	
	@Autowired
	TravellerService travserv;

	@PostMapping("/insertTravellerInfo")
	public Traveller insertTravellerinfo(@RequestBody TravellerDummy travdummyobj)
	
	{
		
		System.out.println(travdummyobj);
		
		
		
		Orderrecord orderobj = orderservice.Ordergetbyid(travdummyobj.getOrderid());
		
		Traveller travobj = new Traveller(travdummyobj.getFname(),travdummyobj.getLname(),travdummyobj.getBdate(),travdummyobj.getGender(),orderobj);
	
		Traveller travobjresp = travserv.insertTravellerinfo(travobj);
			
		return travobjresp;
	}
}