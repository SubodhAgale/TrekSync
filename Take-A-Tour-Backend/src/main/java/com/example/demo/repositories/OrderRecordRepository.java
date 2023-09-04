package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Orderrecord;

public interface OrderRecordRepository extends JpaRepository<Orderrecord, Integer> {

	
}
