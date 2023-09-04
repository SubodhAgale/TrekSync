package com.example.demo.entities;

import java.sql.Date;

public class TravellerDummy {

	
	String fname,lname;
   
    String gender;
    Date bdate;
    int orderid;
	public TravellerDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getBdate() {
		return bdate;
	}
	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public TravellerDummy(String fname, String lname, String gender, Date bdate, int orderid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.bdate = bdate;
		this.orderid = orderid;
	}
	@Override
	public String toString() {
		return "TravellerDummy [fname=" + fname + ", lname=" + lname + ", gender=" + gender + ", bdate=" + bdate
				+ ", orderid=" + orderid + "]";
	}
	
}
