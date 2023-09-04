package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService
{
	@Autowired
	RoleRepository rolerepo;
	
	public Role getRole(int id)
	{
		return rolerepo.findById(id).get();
		
	}
	
}