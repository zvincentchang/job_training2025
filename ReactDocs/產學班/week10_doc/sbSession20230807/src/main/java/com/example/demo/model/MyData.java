package com.example.demo.model;

import javax.persistence.*;
@Entity
public class MyData {	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String user;
	String phone;
	int age;
	
	public MyData() {}
	public MyData(String user, String phone, int age) {		
		this.user = user;
		this.phone = phone;
		this.age = age;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "MyData [id=" + id + ", user=" + user + ", phone=" + phone + ", age=" + age + "]";
	}

}
