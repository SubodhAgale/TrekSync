package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="employee")
public class Employee 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int employee_id;
	
	@Column
	Date e_bdate,e_hiredate;
	
	@Column
	String e_fname,e_mname,e_lname,e_designation,e_adharno,e_email,e_contact;
	
	
	
	@Column
	String e_gender;
	
	@Column
	byte[] e_photo;
	
	@OneToOne
	@JoinColumn(name="e_addressid")
	Address addressid;
	
	@OneToOne
	@JoinColumn(name="e_loginid")
	Login loginid;
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employee(int employee_id, Date e_bdate, Date e_hiredate, String e_fname, String e_mname, String e_lname,
			String e_designation, String e_adharno, String e_email, String e_contact, String e_gender, byte [] e_photo,
			Address addressid, Login loginid) {
		super();
		this.employee_id = employee_id;
		this.e_bdate = e_bdate;
		this.e_hiredate = e_hiredate;
		this.e_fname = e_fname;
		this.e_mname = e_mname;
		this.e_lname = e_lname;
		this.e_designation = e_designation;
		this.e_adharno = e_adharno;
		this.e_email = e_email;
		this.e_contact = e_contact;
		this.e_gender = e_gender;
		this.e_photo = e_photo;
		this.addressid = addressid;
		this.loginid = loginid;
	}

	

	public Employee(Date e_bdate, Date e_hiredate, String e_fname, String e_mname, String e_lname, String e_designation,
			String e_adharno, String e_email, String e_contact, String e_gender, Address addressid, Login loginid) {
		super();
		this.e_bdate = e_bdate;
		this.e_hiredate = e_hiredate;
		this.e_fname = e_fname;
		this.e_mname = e_mname;
		this.e_lname = e_lname;
		this.e_designation = e_designation;
		this.e_adharno = e_adharno;
		this.e_email = e_email;
		this.e_contact = e_contact;
		this.e_gender = e_gender;
		this.addressid = addressid;
		this.loginid = loginid;
	}

	public int getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
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

	public String getE_adharno() {
		return e_adharno;
	}

	public void setE_adharno(String e_adharno) {
		this.e_adharno = e_adharno;
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

	public String getE_gender() {
		return e_gender;
	}

	public void setE_gender(String e_gender) {
		this.e_gender = e_gender;
	}

	public byte[] getE_photo() {
		return e_photo;
	}

	public void setE_photo(byte[] e_photo) {
		this.e_photo = e_photo;
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
		return "Employee [employee_id=" + employee_id + ", e_bdate=" + e_bdate + ", e_hiredate=" + e_hiredate
				+ ", e_fname=" + e_fname + ", e_mname=" + e_mname + ", e_lname=" + e_lname + ", e_designation="
				+ e_designation + ", e_adharno=" + e_adharno + ", e_email=" + e_email + ", e_contact=" + e_contact
				+ ", e_gender=" + e_gender + ", e_photo=" + e_photo + ", addressid=" + addressid + ", loginid="
				+ loginid + "]";
	}

	
	
	
}
