import java.util.*;
import java.util.function.*;
import java.util.stream.*;
public class ListOfTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       List<Integer> data=List.of(1,2,3,4,5,6,7,8,9);
       List<Integer> data2=Arrays.asList(2,4,6,8);
       List<String>  data3=List.of("1","3","5","7","9");
       IntStream is=data3.stream().mapToInt(s -> Integer.valueOf(s));
       is.forEach(System.out::println);
	}

}

class MyInteger implements ToIntFunction<String>{

	@Override
	public int applyAsInt(String value) {
		// TODO Auto-generated method stub
		return Integer.valueOf(value);
	}

	
	
}