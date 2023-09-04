package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.PackageImage;

@Transactional
@Repository
public interface PackageImageRepository extends JpaRepository<PackageImage, Integer> {
	

}