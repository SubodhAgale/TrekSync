	package com.example.demo.repositories;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.AddPackage;
import com.example.demo.entities.PlannedTour;
@Transactional
@Repository
public interface PlannedTourRepository extends JpaRepository<PlannedTour, Integer> 
{
	@Query("SELECT p FROM PlannedTour p where p.status = 0")
	public List<PlannedTour> getAllPlanTourForApproval();

	@Modifying
	@Query("update PlannedTour p set p.status =1 where p.tour_id =:id")
	public int approveTour(int id);
	
	@Query(nativeQuery=true,value="select * from plannedtour  where packageid in(select package_id from package where locations like %:loc% and boardinglocation like %:bloc%) and status=1 and lastdate_apply>=now()")
//	@Query(nativeQuery=true,value="select * from plannedtour  where packageid in(select package_id from package where locations like %:loc% and boardinglocation like %:bloc%) and status=1")
	public List<PlannedTour> getAllPackagesByLocation(String loc, String bloc);

	
	@Query("SELECT e FROM PlannedTour e where e.startdate >= :startdate and status=1 ")
	List<PlannedTour> getAllPackagesByDate(Date startdate);

	
	@Query("SELECT e FROM PlannedTour e where e.packageidobj.package_id = :id and status=1")
	public PlannedTour getPlannedtourbyid(int id);
	
	@Query(nativeQuery=true,value="SELECT * FROM plannedtour  where  lastdate_apply>=now() and  status=1")
	public List<PlannedTour> getAllPackagesForTourist();
//	@Query("Delete p from PlannedTour p where  p.tour_id =:id")
//	public PlannedTour rejectTour(int id);

	@Query("update PlannedTour p set p.availseats= :travellernumber where p.tour_id=:tourid")
	public void updateavailableseats(int tourid, int travellernumber);
}
