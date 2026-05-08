package model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	private String id;
	private String name;
	private int age;
}
