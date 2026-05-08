import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class ListFilter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> empDetails = Arrays.asList("100, Robin, HR",
		        "200, Mary, AdminServices",
		        "101, Peter, HR");
		empDetails.stream().filter(new MyPredict()).forEach(new MyConsumer());
	}

}

class MyPredict implements Predicate<String>{

	@Override
	public boolean test(String t) {
		// TODO Auto-generated method stub
		return t.contains("1");
	}	
}
class MyConsumer implements Consumer<String>{

	@Override
	public void accept(String t) {
		// TODO Auto-generated method stub
		System.out.println(t);
	}
	
}
