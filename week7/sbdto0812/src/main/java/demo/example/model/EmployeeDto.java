package demo.example.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class EmployeeDto {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private Long departmentId;
   
}

