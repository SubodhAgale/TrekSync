package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="address")
public class Address 
{
	@Override
	public String toString() {
		return "Address [address_id=" + address_id + ", addressline=" + addressline + ", district=" + district
				+ ", city=" + city + ", state=" + state + ", country=" + country + ", postal_code=" + postal_code + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int address_id;
	
	@Column
	String addressline,district,city,state,country;
	
	@Column
	int postal_code;

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Address(String addressline, String district, String city, String state, String country, int postal_code) {
		super();
		this.addressline = addressline;
		this.district = district;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postal_code = postal_code;
	}


	public Address(int address_id, String addressline, String district, String city, String state, String country,
			int postal_code) {
		super();
		this.address_id = address_id;
		this.addressline = addressline;
		this.district = district;
		this.city = city;
		this.state = state;
		this.country = country;
		this.postal_code = postal_code;
	}

	public int getAddress_id() {
		return address_id;
	}

	public void setAddress_id(int address_id) {
		this.address_id = address_id;
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

	public int getPostal_code() {
		return postal_code;
	}

	public void setPostal_code(int postal_code) {
		this.postal_code = postal_code;
	}
	

}