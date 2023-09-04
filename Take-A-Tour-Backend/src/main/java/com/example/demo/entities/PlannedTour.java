package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="plannedtour")
public class PlannedTour
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int tour_id;
	
	@Column
	Date startdate,lastdate;
	
	@Column
	int availseats;
	
	@Column
	Date lastdate_apply;
	
	@Column
	double packageprice;
	@Column
	String duration;
	@OneToOne
	@JoinColumn(name = "packageid")
	AddPackage packageidobj;
	
	@ManyToOne
	@JoinColumn(name = "employeeid")
	Employee employeeid;

	@Column
	int status;
	
	public PlannedTour() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public PlannedTour(int tour_id, Date startdate, Date lastdate, int availseats, Date lastdate_apply,
			double packageprice, String duration, AddPackage packageidobj, Employee employeeid, int status) {
		super();
		this.tour_id = tour_id;
		this.startdate = startdate;
		this.lastdate = lastdate;
		this.availseats = availseats;
		this.lastdate_apply = lastdate_apply;
		this.packageprice = packageprice;
		this.duration = duration;
		this.packageidobj = packageidobj;
		this.employeeid = employeeid;
		this.status = status;
	}



	public int getTour_id() {
		return tour_id;
	}



	public void setTour_id(int tour_id) {
		this.tour_id = tour_id;
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



	public double getPackageprice() {
		return packageprice;
	}



	public void setPackageprice(double packageprice) {
		this.packageprice = packageprice;
	}



	public String getDuration() {
		return duration;
	}



	public void setDuration(String duration) {
		this.duration = duration;
	}



	public AddPackage getPackageidobj() {
		return packageidobj;
	}



	public void setPackageidobj(AddPackage packageidobj) {
		this.packageidobj = packageidobj;
	}



	public Employee getEmployeeid() {
		return employeeid;
	}



	public void setEmployeeid(Employee employeeid) {
		this.employeeid = employeeid;
	}



	public int getStatus() {
		return status;
	}



	public void setStatus(int status) {
		this.status = status;
	}



	public PlannedTour(Date startdate, Date lastdate, int availseats, Date lastdate_apply, double packageprice,
			String duration, AddPackage packageidobj, Employee employeeid, int status) {
		super();
		this.startdate = startdate;
		this.lastdate = lastdate;
		this.availseats = availseats;
		this.lastdate_apply = lastdate_apply;
		this.packageprice = packageprice;
		this.duration = duration;
		this.packageidobj = packageidobj;
		this.employeeid = employeeid;
		this.status = status;
	}



	@Override
	public String toString() {
		return "PlannedTour [tour_id=" + tour_id + ", startdate=" + startdate + ", lastdate=" + lastdate
				+ ", availseats=" + availseats + ", lastdate_apply=" + lastdate_apply + ", packageprice=" + packageprice
				+ ", duration=" + duration + ", packageidobj=" + packageidobj + ", employeeid=" + employeeid
				+ ", status=" + status + "]";
	}

	
	
	
}