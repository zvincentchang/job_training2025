package com.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="googleusers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GoogleUser {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   Integer id;
   @Column(nullable=false)
   String name;
   @Column(nullable=false)
   String googlekey;
}
