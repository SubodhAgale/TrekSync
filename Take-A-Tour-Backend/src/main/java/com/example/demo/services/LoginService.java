package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService 
{
	@Autowired
	LoginRepository loginrepo;
	
	public Login getLogin(String uid, String pwd)
	{
		Login l;
		Optional<Login> ol = loginrepo.getLogin(uid, pwd);
	
		try
		{
			l = ol.get();
		}
		catch(Exception e)
		{
			l = null;
		}
		return l;
		
	}
	public Login save (Login l)
	{
		return loginrepo.save(l);
	}
//	public int getUserInfo(String newpwd,String uid) {
//		return loginrepo.getUserInfouid(newpwd,uid);
//	}
	public int UpdatePasswordiInLogin(String newpwd,String uid) {
		return loginrepo.UpdatePasswordiInLogin(newpwd,uid);
	}

}
