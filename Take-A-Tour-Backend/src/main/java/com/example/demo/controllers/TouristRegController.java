package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Address;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEncryption;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.entities.Tourist;
import com.example.demo.entities.TouristReg;
import com.example.demo.services.AddressService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.TouristRegService;

@CrossOrigin(origins = "*")
@RestController
public class TouristRegController 
{
	@Autowired
	TouristRegService trstserv;
	
	@Autowired
	RoleService roleservice;

	@Autowired
	LoginService lservice;
	
	@Autowired
	AddressService aservice;
	
	
	@Autowired
	JavaMailSender sender ;
	
	
	@Autowired
	SaltValue saltValue;
	
	@PostMapping("/touristReg")
	public Tourist regTourist(@RequestBody TouristReg treg)
	
	{
		
		System.out.println(treg);
		
		Role r = roleservice.getRole(1);
		System.out.println("salt value = "+saltValue.getSalt());
		
		String encrypted = PassBasedEncryption.generateSecurePassword(treg.getPwd(), saltValue.getSalt());
		
		
		Login l = new Login(treg.getUid(),encrypted,1,r);
		
		Login lsaved = lservice.save(l);
		
		Address addr = new Address(treg.getAddressline(),treg.getDistrict(),treg.getCity(),treg.getState(),treg.getCountry(),treg.getPostalcode());
	
		Address asaved = aservice.save(addr);
		
		Tourist t = new Tourist(treg.getFname(),treg.getLname(),treg.getEmail(),treg.getContact(),treg.getBdate(),asaved,lsaved);
		
//		SimpleMailMessage mailmsg = new SimpleMailMessage();
//		
//		mailmsg.setFrom("takeatour28@gmail.com");
//		mailmsg.setTo(t.getT_email());
////		mailmsg.setTo("deshpandegaurav57@gmail.com");
//		mailmsg.setSubject("Registration Mail");
//		mailmsg.setText("You have succefully registered and entered to Take A Tour family.. userid : "+treg.getUid()+" Password : "+treg.getPwd());
//		sender.send(mailmsg);
		
		return trstserv.saveTourist(t);
		
	
		
		
	}
//	@PostMapping("/touristReg")
//	public Tourist regTourist(@RequestBody TouristReg treg)
//	
//	{
//		
//		System.out.println(treg);
//		
//		Role r = roleservice.getRole(1);
//		
//		Login l = new Login(treg.getUid(),treg.getPwd(),1,r);
//		
//		Login lsaved = lservice.save(l);
//		
//		Address addr = new Address(treg.getAddressline(),treg.getDistrict(),treg.getCity(),treg.getState(),treg.getCountry(),treg.getPostalcode());
//	
//		Address asaved = aservice.save(addr);
//		
//		
//		
//		Tourist t = new Tourist(treg.getFname(),treg.getLname(),treg.getEmail(),treg.getContact(),asaved,lsaved);
//		
//		
//		SimpleMailMessage mailmsg = new SimpleMailMessage();
//		
//		mailmsg.setFrom("takeatour28@gmail.com");
//		mailmsg.setTo(t.getT_email());
////		mailmsg.setTo("deshpandegaurav57@gmail.com");
//		mailmsg.setSubject("Registration Mail");
//		mailmsg.setText("You have succefully registered and entered to Take A Tour family");
//		sender.send(mailmsg);
//		return trstserv.saveTourist(t);
//		
//		
//	}
//	
	@GetMapping("/touristgetbyid")
	public Tourist getTouristbyloginid(@RequestParam("tid") int id )
	{
		return trstserv.getTourist(id);
	}
	
	
}