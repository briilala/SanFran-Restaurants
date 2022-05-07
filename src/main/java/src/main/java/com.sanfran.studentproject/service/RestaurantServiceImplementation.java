package com.sanfran.studentproject.service;

import com.sanfran.studentproject.model.Restaurant;
import com.sanfran.studentproject.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServiceImplementation implements RestaurantService {

  @Autowired
  private RestaurantRepository restaurantRepository;

  @Override
  public Restaurant saveRestaurant(Restaurant restaurant) {
    return restaurantRepository.save(restaurant);
  }

  @Override
  public List<Restaurant> getAllRestaurants(){
    return restaurantRepository.findAll();
  }
}
