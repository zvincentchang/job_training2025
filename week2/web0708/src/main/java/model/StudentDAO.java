package model;
import java.util.*;
public class StudentDAO {
   List<Student> data=new ArrayList<>();
   public StudentDAO() {
	   data.add(new Student("S001","Mary"));
	   data.add(new Student("S002","John"));
	   data.add(new Student("S003","George"));
   }
   public List<Student> getAll(){
	   return data;
   }
   public boolean add(Student s) {
	   return data.add(s);
   }
   public boolean delete(Student s) {
	   return data.remove(s);
   }
   public void update(int i,Student s) {	    
	   data.set(i, s);
   }
}
