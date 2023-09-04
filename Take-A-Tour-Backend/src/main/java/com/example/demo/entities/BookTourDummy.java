package com.example.demo.entities;

public class BookTourDummy
{
	
	int touristid,tourid,travellernumber;
	double totamount;
	String paymenttype;
	public BookTourDummy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookTourDummy(int touristid, int tourid, int travellernumber, double totamount, String paymenttype) {
		super();
		this.touristid = touristid;
		this.tourid = tourid;
		this.travellernumber = travellernumber;
		this.totamount = totamount;
		this.paymenttype = paymenttype;
	}
	public int getTouristid() {
		return touristid;
	}
	public void setTouristid(int touristid) {
		this.touristid = touristid;
	}
	public int getTourid() {
		return tourid;
	}
	public void setTourid(int tourid) {
		this.tourid = tourid;
	}
	public int getTravellernumber() {
		return travellernumber;
	}
	public void setTravellernumber(int travellernumber) {
		this.travellernumber = travellernumber;
	}
	public double getTotamount() {
		return totamount;
	}
	public void setTotamount(double totamount) {
		this.totamount = totamount;
	}
	public String getPaymenttype() {
		return paymenttype;
	}
	public void setPaymenttype(String paymenttype) {
		this.paymenttype = paymenttype;
	}
	@Override
	public String toString() {
		return "BookTourDummy [touristid=" + touristid + ", tourid=" + tourid + ", travellernumber=" + travellernumber
				+ ", totamount=" + totamount + ", paymenttype=" + paymenttype + "]";
	}
	
	
	
	
	

}
