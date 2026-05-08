import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class StreamPeek {

	public static void main(String[] args) {
		
		List<String> nL = Arrays.asList("Jim", "John", "Jeff");
		Function<String, String> funVal = s -> "Hello : ".concat(s);
		Stream<String> ss=nL.stream()
		        .map(funVal)
		        .peek(System.out::println);
		ss.forEach(System.out::println);
	}

}
