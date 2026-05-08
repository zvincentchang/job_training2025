
import java.math.BigDecimal;
import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class StreamStaffPublic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		   List<Staff> staff = Arrays.asList(
	                new Staff("mkyong", 30, new BigDecimal(10000)),
	                new Staff("jack", 27, new BigDecimal(20000)),
	                new Staff("lawrence", 33, new BigDecimal(30000))
	        );
		   List<StaffPublic>  data=convertToStaffPublic(staff);
		   System.out.println(data);
	}
	 private static List<StaffPublic> convertToStaffPublic(List<Staff> staff) {

	        List<StaffPublic> result = new ArrayList<>();

//	        for (Staff temp : staff) {
//
//	            StaffPublic obj = new StaffPublic();
//	            obj.setName(temp.getName());
//	            obj.setAge(temp.getAge());
//	            if ("mkyong".equals(temp.getName())) {
//	                obj.setExtra("this field is for mkyong only!");
//	            }
//
//	            result.add(obj);
//	        }
	         result = staff.stream().map(temp -> 
	         {
	            StaffPublic obj = new StaffPublic();
	            obj.setName(temp.getName());
	            obj.setAge(temp.getAge());
	            if ("mkyong".equals(temp.getName())) {
	                obj.setExtra("this field is for mkyong only!");
	            }
	            return obj;
	        }).collect(Collectors.toList());



	        return result;

	    }

}
