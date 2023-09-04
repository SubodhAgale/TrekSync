package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="login")
public class Login 
{
	@Override
	public String toString() {
		return "Login [login_id=" + login_id + ", uid=" + uid + ", pwd=" + pwd + ", status=" + status + ", role_id="
				+ role_id + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;
	
	@Column
	String uid,pwd;
	
	@Column
	int status;
	
	@ManyToOne
	@JoinColumn(name="role_id")
	Role role_id;

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

    
	
	public Login(String uid, String pwd, int status, Role role_id) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.status = status;
		this.role_id = role_id;
	}



	public Login(int login_id, String uid, String pwd, int status, Role role_id) {
		super();
		this.login_id = login_id;
		this.uid = uid;
		this.pwd = pwd;
		this.status = status;
		this.role_id = role_id;
	}



	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
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

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Role getRole_id() {
		return role_id;
	}

	public void setRole_id(Role role_id) {
		this.role_id = role_id;
	}
	
	
}