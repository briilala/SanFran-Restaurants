package com.sanfran.studentproject.repository;

import com.sanfran.studentproject.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
 public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
 }
