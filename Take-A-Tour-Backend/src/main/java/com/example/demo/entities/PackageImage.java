package com.example.demo.entities;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="packageimage")
public class PackageImage {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	int packageimage_id;
	
	@Column
	Long[] packimage;
	

	@JsonIgnoreProperties("packimageobj")
	@ManyToOne(fetch = FetchType.LAZY) 
	@JoinColumn(name="package_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
	AddPackage packobj;


	public PackageImage() {
		super();
		// TODO Auto-generated constructor stub
	}


	public PackageImage(int packageimage_id, Long[] packimage, AddPackage packobj) {
		super();
		this.packageimage_id = packageimage_id;
		this.packimage = packimage;
		this.packobj = packobj;
	}
	
	


	public PackageImage(AddPackage packobj) {
		super();
		this.packobj = packobj;
	}


	public PackageImage(Long[] packimage, AddPackage packobj) {
		super();
		this.packimage = packimage;
		this.packobj = packobj;
	}


	public int getPackageimage_id() {
		return packageimage_id;
	}


	public void setPackageimage_id(int packageimage_id) {
		this.packageimage_id = packageimage_id;
	}


	public Long[] getPackimage() {
		return packimage;
	}


	public void setPackimage(Long[] packimage) {
		this.packimage = packimage;
	}

	@JsonIgnore
	public AddPackage getPackobj() {
		return packobj;
	}

    @JsonIgnore
	public void setPackobj(AddPackage packobj) {
		this.packobj = packobj;
	}


	@Override
	public String toString() {
		return "PackageImage [packageimage_id=" + packageimage_id + ", packimage=" + Arrays.toString(packimage)
				+ ", packobj]";
	}
	
	

}