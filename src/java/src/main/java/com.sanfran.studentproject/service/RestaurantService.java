package com.sanfran.studentproject.service;

import com.sanfran.studentproject.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface RestaurantService {
  public Restaurant saveRestaurant(Restaurant restaurant);
  @Autowired
  public List<Restaurant> getAllRestaurants();
}
