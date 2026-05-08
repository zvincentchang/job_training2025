package com.demo.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<GoogleUser,Integer> {
     GoogleUser findByName(String n);
}
