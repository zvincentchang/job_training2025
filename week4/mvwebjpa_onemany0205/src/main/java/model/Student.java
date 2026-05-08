package model;

import javax.persistence.*;

@Entity
@Table(name="student")
public class Student {
	@Id
	@Column(name="sid")
	int sid;
	@Column(name="sname")
	String sname;
	@Column(name="age")
	int age;

	public Student() {
	}

	public Student(int sid, String sname, int age) {

		this.sid = sid;
		this.sname = sname;
		this.age = age;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Student [sid=" + sid + ", sname=" + sname + ", age=" + age + "]";
	}

}
