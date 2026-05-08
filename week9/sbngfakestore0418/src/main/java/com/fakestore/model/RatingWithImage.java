package com.fakestore.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="ratingwithimage")
public class RatingWithImage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	Integer id;
	double rate;
	int count;
    // getters 和 setters
}

