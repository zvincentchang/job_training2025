package com.example.jsondb.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDAO extends JpaRepository<Product,Integer> {

}
