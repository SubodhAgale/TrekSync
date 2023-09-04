package com.example.demo.entities;

import java.util.Arrays;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="package")
public class AddPackage {

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	int package_id;
	
	@Column
	String packagename;

	
	
	
	@Column
	int tourist_capacity;
	
	@Column
	String description;
	
	@Column
	String locations;

	@Column
	String boardinglocation;
	
	@OneToMany( mappedBy = "packobj",fetch = FetchType.LAZY)
	@Cascade(value=CascadeType.ALL)
	Set<PackageImage> packimageobj;


	public AddPackage() {
		super();
		// TODO Auto-generated constructor stub
	}






	public AddPackage(String packagename,   int tourist_capacity,
			String description, String locations, String boardinglocation, Set<PackageImage> packimageobj) {
		super();
		this.packagename = packagename;
		this.tourist_capacity = tourist_capacity;
		this.description = description;
		this.locations = locations.toLowerCase();
		this.boardinglocation = boardinglocation.toLowerCase();
		this.packimageobj = packimageobj;
	}






	public AddPackage(int package_id, String packagename,  int tourist_capacity,
			String description, String locations, String boardinglocation, Set<PackageImage> packimageobj) {
		super();
		this.package_id = package_id;
		this.packagename = packagename;
		this.tourist_capacity = tourist_capacity;
		this.description = description;
		this.locations = locations.toLowerCase();
		this.boardinglocation = boardinglocation.toLowerCase();
		this.packimageobj = packimageobj;
	}






	public String getBoardinglocation() {
		return boardinglocation;
	}


	public void setBoardinglocation(String boardinglocation) {
		this.boardinglocation = boardinglocation;
	}


	public int getPackage_id() {
		return package_id;
	}


	public void setPackage_id(int package_id) {
		this.package_id = package_id;
	}


	public String getPackagename() {
		return packagename;
	}


	public void setPackagename(String packagename) {
		this.packagename = packagename;
	}





	public int getTourist_capacity() {
		return tourist_capacity;
	}


	public void setTourist_capacity(int tourist_capacity) {
		this.tourist_capacity = tourist_capacity;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getLocations() {
		return locations;
	}


	public void setLocations(String locations) {
		this.locations = locations;
	}


	public Set<PackageImage> getPackimageobj() {
		return packimageobj;
	}


	public void setPackimageobj(Set<PackageImage> packimageobj) {
		for(PackageImage p : packimageobj)
			p.setPackobj(this);
		
		this.packimageobj = packimageobj;
	}


	@Override
	public String toString() {
		return "AddPackage [package_id=" + package_id + ", packagename=" + packagename   + ", tourist_capacity=" + tourist_capacity + ", description="
				+ description + ", locations=" + locations + ", packimageobj=";
	}


	
	
}