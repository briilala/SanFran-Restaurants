package com.sanfran.studentproject.service;

import com.sanfran.studentproject.model.Restaurant;

import java.util.List;

public interface RestaurantService {
  public Restaurant saveRestaurant(Restaurant restaurant);
  public List<Restaurant> getAllRestaurants();
}
