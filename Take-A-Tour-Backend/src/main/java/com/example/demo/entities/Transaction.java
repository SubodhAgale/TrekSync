package com.example.demo.entities;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="transaction")
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int transaction_id;
	
	@Column
	double amount;
	
	@Column
	String paymenttype;
	
	@Column
	Date paymentdate;

	public int getTransaction_id() {
		return transaction_id;
	}

	public void setTransaction_id(int transaction_id) {
		this.transaction_id = transaction_id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPaymenttype() {
		return paymenttype;
	}

	public void setPaymenttype(String paymenttype) {
		this.paymenttype = paymenttype;
	}

	public Date getPaymentdate() {
		return paymentdate;
	}

	public void setPaymentdate(Date paymentdate) {
		this.paymentdate = paymentdate;
	}

	@Override
	public String toString() {
		return "Transaction [transaction_id=" + transaction_id + ", amount=" + amount + ", paymenttype=" + paymenttype
				+ ", paymentdate=" + paymentdate + "]";
	}

	
	public Transaction(double amount, String paymenttype, Date paymentdate) {
		super();
		this.amount = amount;
		this.paymenttype = paymenttype;
		this.paymentdate = paymentdate;
	}

	public Transaction(double amount, String paymenttype) {
		super();
		this.amount = amount;
		this.paymenttype = paymenttype;
	}

	public Transaction(int transaction_id, double amount, String paymenttype, Date paymentdate) {
		super();
		this.transaction_id = transaction_id;
		this.amount = amount;
		this.paymenttype = paymenttype;
		this.paymentdate = paymentdate;
	}

	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}

}