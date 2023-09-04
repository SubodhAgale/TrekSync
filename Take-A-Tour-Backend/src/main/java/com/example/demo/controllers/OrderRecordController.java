	package com.example.demo.controllers;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookTourDummy;
import com.example.demo.entities.Orderrecord;
import com.example.demo.entities.PlannedTour;
import com.example.demo.entities.Tourist;
import com.example.demo.entities.Transaction;
import com.example.demo.services.OrderRecordService;
import com.example.demo.services.PlannedTourService;
import com.example.demo.services.TouristRegService;
import com.example.demo.services.TransactionService;


@CrossOrigin(origins = "*")
@RestController
public class OrderRecordController {

	@Autowired
	TransactionService transactionserv;
	
	@Autowired
	PlannedTourService ptserv;
	
	@Autowired
	TouristRegService trstserv;
	
	@Autowired
	OrderRecordService orderservice;
	
	@PostMapping("/Booktourbytourist")
	public Orderrecord InsertRecord(@RequestBody BookTourDummy booktobj) throws ParseException
	{
		System.out.println(booktobj);
		
		
		 LocalDateTime myDateObj = LocalDateTime.now();  
		 
		    System.out.println("Before formatting: " + myDateObj);  
		    DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");  
		    
		    String formattedDate = myDateObj.format(myFormatObj);  
		    System.out.println("After formatting: " + formattedDate); 
		    
		    SimpleDateFormat  format = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		    java.util.Date date = format.parse(formattedDate);
		    System.out.println("-------------------"+date);
		    
//		    java.sql.Date sqlDate = new java.sql.Date(date.getTime());
//		    System.out.println("-------------------"+sqlDate);
		
//		 long millis = System.currentTimeMillis();
//	        java.sql.Date sqlDate = new java.sql.Date(millis);
//	        System.out.println(sqlDate);
		
		Transaction tranobj = new Transaction(booktobj.getTotamount(),booktobj.getPaymenttype(),date);
		Transaction resptranobj = transactionserv.insertRecord(tranobj);
		
		System.out.println(resptranobj);
		
		PlannedTour resptourobj = ptserv.getPlannedTourByIdForBooking(booktobj.getTourid());
		
		
		Tourist resptouristobj =trstserv.getTouristByIdForBooking(booktobj.getTouristid());
			
	
		
		Orderrecord orderobj =new Orderrecord(booktobj.getTravellernumber(),resptourobj,resptranobj,resptouristobj);
		
		Orderrecord resporderobj =orderservice.insertrecordFinal(orderobj);
		
		int travno=resptourobj.getAvailseats()-booktobj.getTravellernumber();
		ptserv.updateavailableseats(booktobj.getTourid(),travno);
	   return resporderobj;	
		
	}
	
	
}
