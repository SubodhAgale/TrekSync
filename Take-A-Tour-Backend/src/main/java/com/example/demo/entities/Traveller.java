package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="traveller")
public class Traveller {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int travellerid;
	
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	Date bdate;
	
	@Column
	String gender;

	@ManyToOne
	@JoinColumn(name="orderid")
    Orderrecord orederobj;


	public Traveller() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getTravellerid() {
		return travellerid;
	}


	public void setTravellerid(int travellerid) {
		this.travellerid = travellerid;
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


	public Date getBdate() {
		return bdate;
	}


	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public Orderrecord getOrederobj() {
		return orederobj;
	}


	public void setOrederobj(Orderrecord orederobj) {
		this.orederobj = orederobj;
	}


	public Traveller(String fname, String lname, Date bdate, String gender, Orderrecord orederobj) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.bdate = bdate;
		this.gender = gender;
		this.orederobj = orederobj;
	}


	public Traveller(int travellerid, String fname, String lname, Date bdate, String gender, Orderrecord orederobj) {
		super();
		this.travellerid = travellerid;
		this.fname = fname;
		this.lname = lname;
		this.bdate = bdate;
		this.gender = gender;
		this.orederobj = orederobj;
	}


	@Override
	public String toString() {
		return "Traveller [travellerid=" + travellerid + ", fname=" + fname + ", lname=" + lname + ", bdate=" + bdate
				+ ", gender=" + gender + ", orederobj=" + orederobj + "]";
	}

	
	
}