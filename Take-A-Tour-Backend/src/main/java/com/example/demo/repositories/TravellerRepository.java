package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Traveller;

public interface TravellerRepository extends JpaRepository<Traveller, Integer> {

}
