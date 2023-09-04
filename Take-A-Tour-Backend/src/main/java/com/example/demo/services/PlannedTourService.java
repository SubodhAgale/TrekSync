package com.example.demo.services;

import java.sql.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.PlannedTour;
import com.example.demo.entities.Tourist;
import com.example.demo.repositories.PlannedTourRepository;

@Service
public class PlannedTourService 
{
	@Autowired
	PlannedTourRepository plannedtourrepo;
	
	public PlannedTour save (PlannedTour d)
	{
		return plannedtourrepo.save(d);
	}
	// get plan tour by package id
		public PlannedTour getPlannedtourbyid(int pid) {
			
			return plannedtourrepo.getPlannedtourbyid(pid);
		}
		
	public List<PlannedTour> getAllPlanTourForApproval() {
		// TODO Auto-generated method stub
		return plannedtourrepo.getAllPlanTourForApproval();
	}

	public int approveTour(int id) {
		// TODO Auto-generated method stub
		return plannedtourrepo.approveTour(id);
	}

	public List<PlannedTour> getAllPackagesByLocation(String loc, String bloc) {
		// TODO Auto-generated method stub
//		return plannedtourrepo.findAll();
		return plannedtourrepo.getAllPackagesByLocation(loc, bloc);
	}
	
public List<PlannedTour> geAllPackagesByDate(Date startdate) {
		
		
		return plannedtourrepo.getAllPackagesByDate(startdate);
	}

//get planned tour by its primary key tour_id  for booking tour
	public PlannedTour getPlannedTourByIdForBooking(int id)
	{

		Optional<PlannedTour> opt = plannedtourrepo.findById(id);
		PlannedTour p = null;
		try
		{
			p = opt.get();
		}
		catch(NoSuchElementException e)
		{
			p = null;
		}
		return p;
		
	}

public List<PlannedTour> getAllPackagesForTourist() {
	// TODO Auto-generated method stub
	return plannedtourrepo.getAllPackagesForTourist();
}

public void rejectTour(int id) {
	plannedtourrepo.deleteById(id);
	//return plannedtourrepo.rejectTour(id);
}
public void updateavailableseats(int tourid, int travellernumber) 
{
	plannedtourrepo.updateavailableseats(tourid,travellernumber);
	
}

}
