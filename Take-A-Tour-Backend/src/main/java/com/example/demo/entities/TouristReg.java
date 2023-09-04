package com.example.demo.entities;

import java.sql.Date;

public class TouristReg 
{
	String uid,pwd,fname,lname,email,contact,addressline,district,city,state,country;
	Date bdate;
	int postalcode;
	public TouristReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Date getBdate() {
		return bdate;
	}

	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}

	public TouristReg(String uid, String pwd, String fname, String lname, String email, String contact,
			String addressline, String district, String city, String state, String country, Date bdate,
			int postalcode) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.addressline = addressline;
		this.district = district;
		this.city = city;
		this.state = state;
		this.country = country;
		this.bdate = bdate;
		this.postalcode = postalcode;
	}

	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getAddressline() {
		return addressline;
	}
	public void setAddressline(String addressline) {
		this.addressline = addressline;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getPostalcode() {
		return postalcode;
	}
	public void setPostalcode(int postalcode) {
		this.postalcode = postalcode;
	}

	@Override
	public String toString() {
		return "TouristReg [uid=" + uid + ", pwd=" + pwd + ", fname=" + fname + ", lname=" + lname + ", email=" + email
				+ ", contact=" + contact + ", addressline=" + addressline + ", district=" + district + ", city=" + city
				+ ", state=" + state + ", country=" + country + ", bdate=" + bdate + ", postalcode=" + postalcode + "]";
	}
	

}




/*
 * ---------------------------------------------------------
 * 
 * "uid" : "gauri123", "pwd" : "131014", "fname" : "Gauri", "lname" :
 * "Deshpande", "email" : "gauri@gmail.com", "contact" : "9922396015" ,
 * "addressline" : "ravet", "district" : "haveli", "city" : "pune", "state" :
 * "Maharashtra", "country" : "INDIA", "postalcode" : 411033
 */