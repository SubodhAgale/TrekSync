package com.example.demo.services;

import javax.persistence.TransactionRequiredException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Transaction;
import com.example.demo.repositories.TransactionRepository;

@Service
public class TransactionService {

	@Autowired
    TransactionRepository transrepo;
	
	public  Transaction insertRecord(Transaction tobj) {
		
		return transrepo.save(tobj);
	}
}
