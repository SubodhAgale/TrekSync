package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Traveller;
import com.example.demo.repositories.TravellerRepository;

@Service
public class TravellerService {

	@Autowired
	TravellerRepository travrepo;
	
	public Traveller insertTravellerinfo(Traveller travobj)
	{
		return travrepo.save(travobj);
	}
}
