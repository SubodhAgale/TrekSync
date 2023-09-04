package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.AddPackage;
import com.example.demo.entities.PackageImage;
import com.example.demo.services.PackageImageService;
import com.example.demo.services.PackageService;

@CrossOrigin(origins = "*")
@RestController
public class PackageImageController 
{
	@Autowired
	PackageImageService packimgserv;
	
	@Autowired
	PackageService packageserv;
	
	@PostMapping(value="/uploadimageandpid/{packid}",consumes = "multipart/form-data")
		public boolean uploadimage(@PathVariable("packid") int pid ,@RequestBody MultipartFile file)
		{
		
		
			AddPackage adpkg = packageserv.getPackageInfo(pid);
			
	
			System.out.println(pid);
			System.out.println(file.getName());
	       boolean flag = true;
			try
			{
				PackageImage packimgobj = new PackageImage(file.getBytes(),adpkg);
				packimgserv.insertdata(packimgobj);
			}
			catch(Exception e)
			{
				flag= false;
			}
	
			return flag;
		}
	
//	@PostMapping("/uploadimagepackage/{packid}")
//	public  PackageImage insertdata(@PathVariable("packid") int pid)
//	{
//	
//		AddPackage adpkg = packageserv.getPackageInfo(pid);
//		
//		PackageImage packimgobj = new PackageImage(adpkg);	
//
//		return packimgserv.insertdata(packimgobj);
//	}
	
	
	
}