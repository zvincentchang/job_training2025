package demo.example.model;

public class EmployeeMapper {
	   public static EmployeeDto  mapToEmployeeDto(Employee emp)
	   {
		   EmployeeDto dto=new EmployeeDto();
		   dto.setId(emp.getId());
		   dto.setFirstName(emp.getFirstName());
		   dto.setLastName(emp.getLastName());
		   dto.setEmail(emp.getEmail());
		   dto.setDepartmentId(1L);
		   
		   return dto;
	   }
	   
	   public static Employee  mapToEmployee(EmployeeDto emp)
	   {
		   Employee e=new Employee();
		   e.setId(emp.getId());
		   e.setFirstName(emp.getFirstName());
		   e.setLastName(emp.getLastName());
		   e.setEmail(emp.getEmail());	   
		   
		   return e;
	   }
	}


