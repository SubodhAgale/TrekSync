package com.example.demo.entities;
import java.sql.Date;
public class PlannedPackageDummy 
{
//	int tour_id;
	Date startdate,lastdate;
	int availseats;
	Date lastdate_apply;
	int packageidobj;
	int employeeid;
	String duration;
	double packageprice;
	
	
	
	
	
	
	public PlannedPackageDummy(Date startdate, Date lastdate, int availseats, Date lastdate_apply, int packageidobj,
			int employeeid, String duration, double packageprice) {
		super();
		this.startdate = startdate;
		this.lastdate = lastdate;
		this.availseats = availseats;
		this.lastdate_apply = lastdate_apply;
		this.packageidobj = packageidobj;
		this.employeeid = employeeid;
		this.duration = duration;
		this.packageprice = packageprice;
	}

	public double getPackageprice() {
		return packageprice;
	}

	public void setPackageprice(double packageprice) {
		this.packageprice = packageprice;
	}

	public PlannedPackageDummy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}


	public Date getStartdate() {
		return startdate;
	}
	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}
	public Date getLastdate() {
		return lastdate;
	}
	public void setLastdate(Date lastdate) {
		this.lastdate = lastdate;
	}
	public int getAvailseats() {
		return availseats;
	}
	public void setAvailseats(int availseats) {
		this.availseats = availseats;
	}
	public Date getLastdate_apply() {
		return lastdate_apply;
	}
	public void setLastdate_apply(Date lastdate_apply) {
		this.lastdate_apply = lastdate_apply;
	}
	public int getPackageidobj() {
		return packageidobj;
	}
	public void setPackageidobj(int packageidobj) {
		this.packageidobj = packageidobj;
	}
	public int getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}

	@Override
	public String toString() {
		return "PlannedPackageDummy [startdate=" + startdate + ", lastdate=" + lastdate + ", availseats=" + availseats
				+ ", lastdate_apply=" + lastdate_apply + ", packageidobj=" + packageidobj + ", employeeid=" + employeeid
				+ ", duration=" + duration + "]";
	}

	
	
	
	

}