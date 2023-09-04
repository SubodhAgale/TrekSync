package com.example.demo.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Employee;
import com.example.demo.repositories.AddressRepository;
import com.example.demo.repositories.EmployeeRepository;

@Service
public class EmployeeService 
{
	  @Autowired
	  EmployeeRepository emprepo;
	  
	  
	  public Employee getEmpInfo(int id)
	  {
		  
		  
		  Optional<Employee> emp= emprepo.findById(id);
		  
		  Employee ep = null;
			try
			{
				ep = emp.get();
			}
			catch(NoSuchElementException e)
			{
				ep = null;
			}
			
			return ep;	  
	  }


	public Employee save(Employee emp)
	{
		
		return emprepo.save(emp);
	}
	
	public boolean upload(int id,byte[] data)
	{
		System.out.println("in service");
		int n = emprepo.uploadPhoto(id,data);
		System.out.println(n);
		if(n==1)
		{
			return true;
		}
		else
			return false;
	}
public Employee getEmployee(int id) {
		
		return emprepo.getEmployee(id);
	}
	
	  		
	
	
	
	
	
	
	
	
	
	
	

}