package demo.example.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="todos")
public class TodoItem {
	
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   Integer id;
   String name;
   boolean complete;
   
}
