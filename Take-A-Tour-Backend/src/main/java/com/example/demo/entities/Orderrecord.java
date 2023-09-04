package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="orderrecord")
public class Orderrecord 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int order_id;
	
	@Column
	int travellernumber;
	
	@ManyToOne
	@JoinColumn(name="tourid")
	PlannedTour tour_idobj;
	
	
	@OneToOne
	@JoinColumn(name="transactionid")
	Transaction trasaction_idobj;


	@ManyToOne
	@JoinColumn(name="touristid")
	
    Tourist tourist_idobj;

	public Orderrecord(int order_id, int travellernumber, PlannedTour tour_idobj, Transaction trasaction_idobj,
			Tourist tourist_idobj) {
		super();
		this.order_id = order_id;
		this.travellernumber = travellernumber;
		this.tour_idobj = tour_idobj;
		this.trasaction_idobj = trasaction_idobj;
		this.tourist_idobj = tourist_idobj;
	}
	

	public Orderrecord(int travellernumber, PlannedTour tour_idobj, Transaction trasaction_idobj,
			Tourist tourist_idobj) {
		super();
		this.travellernumber = travellernumber;
		this.tour_idobj = tour_idobj;
		this.trasaction_idobj = trasaction_idobj;
		this.tourist_idobj = tourist_idobj;
	}


	public Orderrecord() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getTravellernumber() {
		return travellernumber;
	}

	public void setTravellernumber(int travellernumber) {
		this.travellernumber = travellernumber;
	}

	public PlannedTour getTour_idobj() {
		return tour_idobj;
	}

	public void setTour_idobj(PlannedTour tour_idobj) {
		this.tour_idobj = tour_idobj;
	}

	public Transaction getTrasaction_idobj() {
		return trasaction_idobj;
	}

	public void setTrasaction_idobj(Transaction trasaction_idobj) {
		this.trasaction_idobj = trasaction_idobj;
	}

	public Tourist getTourist_idobj() {
		return tourist_idobj;
	}

	public void setTourist_idobj(Tourist tourist_idobj) {
		this.tourist_idobj = tourist_idobj;
	}

	@Override
	public String toString() {
		return "Orderrecord [order_id=" + order_id + ", travellernumber=" + travellernumber + ", tour_idobj="
				+ tour_idobj + ", trasaction_idobj=" + trasaction_idobj + ", tourist_idobj=" + tourist_idobj + "]";
	}


	
	
}