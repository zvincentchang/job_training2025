package com.fakestore.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="productswithimage")
public class ProductWithImage {
	
	@Id
	Integer id;
	String title;
	
	@Column(length=2048)
	String description;
	
	String category;
	
	@OneToOne(cascade = CascadeType.ALL , targetEntity=RatingWithImage.class)
	@JoinColumn(name = "rating_id", referencedColumnName = "id")
	RatingWithImage rating;
	double price;
	String image;
	
	@Lob
	@Column(name = "picture", length = Integer.MAX_VALUE, nullable = true)
	private byte[] picture;
    // 新增其他欄位如需

    // getters 和 setters
}

