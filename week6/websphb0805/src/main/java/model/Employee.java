package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="employees")
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	private String email;
    @Id
	private int employeeNumber;
	private String extension;
	private String firstName;
	private String jobTitle;
	private String lastName;
	private Integer reportsTo;
	//bi-directional many-to-one association to Office
	//@ManyToOne
	//@JoinColumn(name="officeCode")	
	//@JsonBackReference
	//private Office office;	
	private String officeCode;
	
	public Employee() {
	}

	public String getOfficeCode() {
		return officeCode;
	}

	public void setOfficeCode(String officeCode) {
		this.officeCode = officeCode;
	}
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public int getEmployeeNumber() {
		return this.employeeNumber;
	}

	public void setEmployeeNumber(int employeeNumber) {
		this.employeeNumber = employeeNumber;
	}

	public String getExtension() {
		return this.extension;
	}

	public void setExtension(String extension) {
		this.extension = extension;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getJobTitle() {
		return this.jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Integer getReportsTo() {
		return this.reportsTo;
	}
	public void setReportsTo(Integer reportsTo) {
		this.reportsTo = reportsTo;
	}

//	public Office getOffice() {
//		return this.office;
//	}
//	public void setOffice(Office office) {
//		this.office = office;
//	}
}
