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

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.PassBasedEncryption;
import com.example.demo.entities.SaltValue;
import com.example.demo.entities.Tourist;
import com.example.demo.services.LoginService;
import com.example.demo.services.TouristRegService;

@CrossOrigin(origins = "*")
@RestController
public class LoginController 
{
	@Autowired
	LoginService loginservice;
	
	@Autowired
	TouristRegService tservice;
	
	@Autowired
	JavaMailSender sender;
	
	@Autowired
	SaltValue saltValue;
	
	@PostMapping("/chkLogin")
	public Login chkLogin(@RequestBody LoginCheck lcheck)
	{

		return loginservice.getLogin(lcheck.getUid(), lcheck.getPwd());
		
	}
	
	
//	@PostMapping("/chkLogin")
//	public Login chkLogin(@RequestBody LoginCheck lcheck)
//	{
//		
//		String encrypted = PassBasedEncryption.generateSecurePassword(lcheck.getPwd(), saltValue.getSalt());
//		System.out.println("in login controller == encr :"+encrypted);;
//		return loginservice.getLogin(lcheck.getUid(), encrypted);
//		
//	}
	
	@GetMapping("/forgotpassword")
	public int forgotPassword(@RequestParam("userid") String uid)
	{
		
		String newpwd=uid+"123";
		String encrypted = PassBasedEncryption.generateSecurePassword(newpwd, saltValue.getSalt());
		
		Tourist t = tservice.getTourist(uid);
		
		String mail = t.getT_email();

		int update=loginservice.UpdatePasswordiInLogin(encrypted,uid);

		SimpleMailMessage mailmsg = new SimpleMailMessage();
		
//		mailmsg.setFrom("takeatour28@gmail.com");
		mailmsg.setFrom("krushabhchaudhari26@gmail.com");
		mailmsg.setTo(mail);
		mailmsg.setSubject("New Password");
		
		
		mailmsg.setText("Your new password: "+newpwd);
		sender.send(mailmsg);
		return update;
		
	}	
	


}