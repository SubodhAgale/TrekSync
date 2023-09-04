package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PackageImage;
import com.example.demo.repositories.PackageImageRepository;

@Service
public class PackageImageService {
	
	@Autowired
	PackageImageRepository packimgrepo;

	public PackageImage insertdata(PackageImage packimg) {
		
		return packimgrepo.save(packimg);
		
	}
	
	

}