package com.example.jsondb.model;

import jakarta.persistence.*;

@Entity
public class Rating {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	Integer id;
	double rate;
	int count;

	public Rating() {
	}

	public Rating(double rating, int count) {
		
		this.rate = rating;
		this.count = count;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rating) {
		this.rate = rating;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	@Override
	public String toString() {
		return "Rating [id=" + id + ", rating=" + rate + ", count=" + count + "]";
	}
    
	
}
