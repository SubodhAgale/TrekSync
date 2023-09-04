package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.AddPackage;
import com.example.demo.services.PackageService;

@CrossOrigin(origins = "*")
@RestController
public class PackageController {
	
	@Autowired
	PackageService packageservice;
	
	@PostMapping("/addPackage")
	public AddPackage addPackage(@RequestBody AddPackage p)
	{

		return packageservice.save(p);
		
	}
	
//	@PostMapping(value="/uploadpackageimage/{pid}",consumes = "multipart/form-data")
//	public boolean uploadImage(@PathVariable("pid") int pid ,@RequestBody MultipartFile file )
//	{
//		System.out.println(pid);
//		System.out.println(file.getName());
//       boolean flag = true;
//		try
//		{
//			
//			packageservice.upload(pid, file.getBytes());
//		}
//		catch(Exception e)
//		{
//			flag= false;
//		}
//
//		return flag;
//		
//	} 
	
	@GetMapping("/getallpackagesforemp")
	public List<AddPackage> getAllPackages()
	{
		return packageservice.geAllPackages();
	}
	
//	@GetMapping("/deletepackage")
//	public void deletePackage(@RequestParam("packid") int pid)
//	{
//	      packageservice.deletePackage(pid);
//	}
	

}