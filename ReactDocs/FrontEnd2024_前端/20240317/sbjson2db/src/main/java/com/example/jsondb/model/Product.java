package com.example.jsondb.model;

import jakarta.persistence.*;

@Entity
@Table(name="jsonproducts")
public class Product {
	@Id
	Integer id;
	String title;
	String description;
	String category;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "rating_id", referencedColumnName = "id")
	Rating rating;
	double price;
	String image;

	public Product() {

	}

	public Product(Integer id, String title, String description, String category, Rating rating, double price,
			String image) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.rating = rating;
		this.price = price;
		this.image = image;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Rating getRating() {
		return rating;
	}

	public void setRating(Rating rating) {
		this.rating = rating;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", title=" + title + ", description=" + description + ", category=" + category
				+ ", rating=" + rating + ", price=" + price + ", image=" + image + "]";
	}

}
