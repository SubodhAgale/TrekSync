package com.example.demo.controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.AddPackage;
import com.example.demo.entities.Address;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Login;
import com.example.demo.entities.PlannedPackageDummy;
import com.example.demo.entities.PlannedTour;
import com.example.demo.entities.Role;
import com.example.demo.entities.Tourist;
import com.example.demo.services.EmployeeService;
import com.example.demo.services.PackageService;
import com.example.demo.services.PlannedTourService;

@CrossOrigin(origins = "*")
@RestController
public class PlannedTourController 
{
	@Autowired
	PlannedTourService ptserv;
	
	@Autowired
	EmployeeService empserv;
	
	@Autowired
	PackageService packageserv;
	
	@PostMapping("/addPlannedTour")
	public PlannedTour addPackage(@RequestBody PlannedPackageDummy packagedummy)
	{
		System.out.println("----------");
		System.out.println(packagedummy);
		
		
		System.out.println("---------------------"+packagedummy.getPackageidobj());
		
		 
		Employee employee = empserv.getEmpInfo(packagedummy.getEmployeeid());
		
		
		
		AddPackage adpkg = packageserv.getPackageInfo(packagedummy.getPackageidobj());
	
		PlannedTour plantour = new PlannedTour(packagedummy.getStartdate(),packagedummy.getLastdate(),packagedummy.getAvailseats(), packagedummy.getLastdate_apply(),packagedummy.getPackageprice(),packagedummy.getDuration(), adpkg, employee,0);
		
		System.out.println("***********"+adpkg+"***********");
		PlannedTour demo = ptserv.save(plantour);
		
		System.out.println("in planned tour controller ----"+demo);
		
		return demo;
		
		
	}
	@GetMapping("/deletepackage")
	public PlannedTour deletePackage(@RequestParam("packid") int pid)
	{
		int flag=0;
		
		PlannedTour plannedtourobj = ptserv.getPlannedtourbyid(pid);
		
		if(plannedtourobj==null)
		{
		 System.out.println("in if null");
		packageserv.deletePackage(pid);
		flag= 1;
		}
		
		return plannedtourobj;
		
	}
	
	@GetMapping("/getallplantour")
	public List<PlannedTour> getAllPlanTourForApproval()
	{
		return ptserv.getAllPlanTourForApproval();
	}
	
	@GetMapping("/approvetour")
	public int approveTour(@RequestParam("tid") int id)
	{
		return ptserv.approveTour(id);
	}

	
	@GetMapping("/rejecttour")
	public void rejectTour(@RequestParam("tid") int id)
	{
		//return 
				ptserv.rejectTour(id);
	}
	
	
	@GetMapping("/getpackagesbylocation")
	public List<PlannedTour> getAllPackagesByLocation(@RequestParam("location") String loc,@RequestParam("boardinglocation") String bloc)
	{
		System.out.println(loc+" "+bloc);
		
				List<PlannedTour>ls=ptserv.getAllPackagesByLocation(loc,bloc);
				System.out.println(ls);
				return ls;
	}

	
	@GetMapping("/getpackagesbydate")
	public List<PlannedTour> getAllPackagesByDate(@RequestParam("sdate") Date startdate)
	{
		return ptserv.geAllPackagesByDate(startdate);

	}
	
	@GetMapping("/getAllPackagesForTourist")
	public List<PlannedTour> getAllPAckagesForTourist()
	{
		
		return ptserv.getAllPackagesForTourist();
	}
}

/*{
        
        "startdate":"1998-05-25",
        "lastdate":"1998-05-25",
        "availseats":50,
        "lastdate_apply":"1998-05-25",
        "packageidobj": 3,
        "employeeid":1 ,      
       "status":0
    }*/