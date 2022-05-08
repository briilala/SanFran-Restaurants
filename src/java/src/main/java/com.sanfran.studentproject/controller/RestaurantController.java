package com.sanfran.studentproject.controller;

import com.sanfran.studentproject.model.Restaurant;
import com.sanfran.studentproject.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurant")
@CrossOrigin
public class RestaurantController {
  @Autowired
  private RestaurantService restaurantService;

  @PostMapping("/add")
  public String add(@RequestBody Restaurant restaurant){
    restaurantService.saveRestaurant(restaurant);
    return "New Restaurant added";
  }

  @GetMapping("/getAll")
  public List<Restaurant> getAllRestaurants(){
    return restaurantService.getAllRestaurants();
  }
}
