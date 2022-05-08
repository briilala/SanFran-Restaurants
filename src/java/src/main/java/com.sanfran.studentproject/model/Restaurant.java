package com.sanfran.studentproject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class Restaurant {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;
  private String address;
  private String locationDescription;
  private ArrayList<String> foodItems;
  private double latitude;
  private double longitude;
  private double location;
  private int size;

  public Restaurant() {
  }

  // public void init(){
  // }

  public int getId()
  {
    return id;
  }

  public void setId(int id)
  {
    this.id = id;
  }

  public String getName()
  {
    return name;
  }

  public void setName(String name)
  {
    this.name = name;
  }

  public String getAddress()
  {
    return address;
  }

  public void setAddress(String address)
  {
    this.address = address;
  }

  public String getLocoDescript()
  {
    return locationDescription;
  }

  public void setLocoDescript(String locationDescription)
  {
    this.locationDescription = locationDescription;
  }

  public ArrayList<String> getFoodItems()
  {
    return foodItems;
  }

  public void setFoodItems(String foodItems)
  {
    this.foodItems.add(foodItems);
  }

  public double getLatitude()
  {
    return latitude;
  }

  public void setLatitude(double latitude)
  {
    this.latitude = latitude;
  }

  public double getLongitude()
  {
    return longitude;
  }

  public void setLongitude(double longitude)
  {
    this.longitude = longitude;
  }

  public double getLocation()
  {
    return location;
  }

  public void setLocation(double location)
  {
    this.location = location;
  }

  public int getSize()
  {
    return size;
  }

  public void setSize()
  {
    this.size++;
  }
}
