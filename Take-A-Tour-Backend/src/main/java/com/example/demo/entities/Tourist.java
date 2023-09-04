package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="tourist")
public class Tourist 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int tourist_id;
	@Column
	String t_fname,t_lname,t_email,t_contact;
	
	@Column
	Date t_bdate;
	@OneToOne
	@JoinColumn(name="t_addressid")
	Address addressid;
	

	@OneToOne
	@JoinColumn(name="t_loginid")
	Login loginid;

	

	public Tourist() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	

	public Tourist(String t_fname, String t_lname, String t_email, String t_contact, Date t_bdate, Address addressid,
			Login loginid) {
		super();
		this.t_fname = t_fname;
		this.t_lname = t_lname;
		this.t_email = t_email;
		this.t_contact = t_contact;
		this.t_bdate = t_bdate;
		this.addressid = addressid;
		this.loginid = loginid;
	}





	public Date getT_bdate() {
		return t_bdate;
	}





	public void setT_bdate(Date t_bdate) {
		this.t_bdate = t_bdate;
	}





	public Tourist(int tourist_id, String t_fname, String t_lname, String t_email, String t_contact, Date t_bdate,
			Address addressid, Login loginid) {
		super();
		this.tourist_id = tourist_id;
		this.t_fname = t_fname;
		this.t_lname = t_lname;
		this.t_email = t_email;
		this.t_contact = t_contact;
		this.t_bdate = t_bdate;
		this.addressid = addressid;
		this.loginid = loginid;
	}





	public int getTourist_id() {
		return tourist_id;
	}


	public void setTourist_id(int tourist_id) {
		this.tourist_id = tourist_id;
	}


	public String getT_fname() {
		return t_fname;
	}


	public void setT_fname(String t_fname) {
		this.t_fname = t_fname;
	}


	public String getT_lname() {
		return t_lname;
	}


	public void setT_lname(String t_lname) {
		this.t_lname = t_lname;
	}


	public String getT_email() {
		return t_email;
	}


	public void setT_email(String t_email) {
		this.t_email = t_email;
	}


	public String getT_contact() {
		return t_contact;
	}


	public void setT_contact(String t_contact) {
		this.t_contact = t_contact;
	}


	public Address getAddressid() {
		return addressid;
	}


	public void setAddressid(Address addressid) {
		this.addressid = addressid;
	}


	public Login getLoginid() {
		return loginid;
	}


	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}





	@Override
	public String toString() {
		return "Tourist [tourist_id=" + tourist_id + ", t_fname=" + t_fname + ", t_lname=" + t_lname + ", t_email="
				+ t_email + ", t_contact=" + t_contact + ", t_bdate=" + t_bdate + ", addressid=" + addressid
				+ ", loginid=" + loginid + "]";
	}


	
	

}