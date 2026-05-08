package demo.example.model;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employees")
public class Employee {		
    @Id
    @Column(name="employeeNumber")
	private Integer employeeNumber;
	private String extension;
	private String firstName;
	private String officeCode;
	private String lastName;    
	private String email;	
	private Integer reportsTo;	
	private String jobTitle;

    //Setters, getters and toString()
}

