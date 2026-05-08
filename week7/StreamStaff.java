import java.math.BigDecimal;
import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class StreamStaff {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 List<Staff> staff = Arrays.asList(
	                new Staff("mkyong", 30, new BigDecimal(10000)),
	                new Staff("jack", 27, new BigDecimal(20000)),
	                new Staff("lawrence", 33, new BigDecimal(30000))
	        );

	        //Before Java 8
	        List<String> result = new ArrayList<>();
	        for (Staff x : staff) {
	            result.add(x.getName());
	        }
	        System.out.println(result); //[mkyong, jack, lawrence]

	        //Java 8
	        List<BigDecimal> collect = staff.stream().map(new StaffNames()).collect(Collectors.toList());
	        System.out.println(collect); //[mkyong, jack, lawrence]

	    

	}

}
class StaffNames implements Function<Staff,BigDecimal>{

	@Override
	public BigDecimal apply(Staff t) {
		// TODO Auto-generated method stub
		return t.getSalary();
	}
	
}