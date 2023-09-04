package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Tourist;
import com.example.demo.entities.Transaction;

@Transactional
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer>  {
//
//    @Modifying
//    @Query(value = "insert into Transaction(amount,paymentdate,paymenttype) VALUES (:userId,:name,now())", nativeQuery = true)
//	public Transaction insertRecord(double amount,String paymenttype);
   
}