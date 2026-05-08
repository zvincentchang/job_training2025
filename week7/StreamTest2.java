import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class StreamTest2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 List<String> alpha =new ArrayList<>( Arrays.asList("ab", "bcd", "cdef", "defghi"));
         List<Integer>  data=alpha.stream().map(String::length).collect(Collectors.toList());		 
         System.out.println(alpha);
         System.out.println(data);
	}

}
class MyFunc implements Function<String,Integer>{

	@Override
	public Integer apply(String t) {
		// TODO Auto-generated method stub
		return t.length();
	}
	
}