package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Tourist;
@Repository
public interface TouristRegRepository extends JpaRepository<Tourist, Integer> 
{
	


	@Query("SELECT t FROM Tourist t where t.loginid.login_id = :id ")
	public Tourist getTourist(int id);
	

	@Query("SELECT t FROM Tourist t where t.loginid.uid = :uid ")
	public Tourist getTourist(String uid);
}