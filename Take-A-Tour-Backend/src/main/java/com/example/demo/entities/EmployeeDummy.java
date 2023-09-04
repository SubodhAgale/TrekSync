package com.example.demo.entities;

import java.sql.Date;

public class EmployeeDummy {
	
	String uid ,pwd ,e_fname ,e_mname ,e_lname,e_designation,e_email,    e_contact,e_adharno,addressline,
	district,city,state,country,e_gender;
    

	Date e_bdate,e_hiredate;
    int postalcode;
    
    
    
    public EmployeeDummy() 
    {
		super();
		// TODO Auto-generated constructor stub
	}
    
    public EmployeeDummy(String uid, String pwd, String e_fname, String e_mname, String e_lname, String e_designation,
			String e_email, String e_contact, String e_adharno, String addressline, String district, String city,
			String state, String country, String e_gender, Date e_bdate, Date e_hiredate, int postalcode
			) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.e_fname = e_fname;
		this.e_mname = e_mname;
		this.e_lname = e_lname;
		this.e_designation = e_designation;
		this.e_email = e_email;
		this.e_contact = e_contact;
		this.e_adharno = e_adharno;
		this.addressline = addressline;
		this.district = district;
		this.city = city;
		this.state = state;
		this.country = country;
		this.e_gender = e_gender;
		this.e_bdate = e_bdate;
		this.e_hiredate = e_hiredate;
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

	public String getE_fname() {
		return e_fname;
	}

	public void setE_fname(String e_fname) {
		this.e_fname = e_fname;
	}

	public String getE_mname() {
		return e_mname;
	}

	public void setE_mname(String e_mname) {
		this.e_mname = e_mname;
	}

	public String getE_lname() {
		return e_lname;
	}

	public void setE_lname(String e_lname) {
		this.e_lname = e_lname;
	}

	public String getE_designation() {
		return e_designation;
	}

	public void setE_designation(String e_designation) {
		this.e_designation = e_designation;
	}

	public String getE_email() {
		return e_email;
	}

	public void setE_email(String e_email) {
		this.e_email = e_email;
	}

	public String getE_contact() {
		return e_contact;
	}

	public void setE_contact(String e_contact) {
		this.e_contact = e_contact;
	}

	public String getE_adharno() {
		return e_adharno;
	}

	public void setE_adharno(String e_adharno) {
		this.e_adharno = e_adharno;
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

	public String getE_gender() {
		return e_gender;
	}

	public void setE_gender(String e_gender) {
		this.e_gender = e_gender;
	}

	public Date getE_bdate() {
		return e_bdate;
	}

	public void setE_bdate(Date e_bdate) {
		this.e_bdate = e_bdate;
	}

	public Date getE_hiredate() {
		return e_hiredate;
	}

	public void setE_hiredate(Date e_hiredate) {
		this.e_hiredate = e_hiredate;
	}

	public int getPostalcode() {
		return postalcode;
	}

	public void setPostalcode(int postalcode) {
		this.postalcode = postalcode;
	}

	

	@Override
	public String toString() {
		return "EmployeeDummy [uid=" + uid + ", pwd=" + pwd + ", e_fname=" + e_fname + ", e_mname=" + e_mname
				+ ", e_lname=" + e_lname + ", e_designation=" + e_designation + ", e_email=" + e_email + ", e_contact="
				+ e_contact + ", e_adharno=" + e_adharno + ", addressline=" + addressline + ", district=" + district
				+ ", city=" + city + ", state=" + state + ", country=" + country + ", e_gender=" + e_gender
				+ ", e_bdate=" + e_bdate + ", e_hiredate=" + e_hiredate + ", postalcode=" + postalcode +
				 "]";
	}
    
    
    

}