import java.util.*;
import java.util.stream.Collectors;
import java.util.function.*;
public class DoubleList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	   Function<Integer,Integer> func=new Function<Integer,Integer>(){
		@Override
		public Integer apply(Integer t) {
			// TODO Auto-generated method stub
			return t*t;
		}
		   
	   };
       List<Integer> data=new ArrayList<>(Arrays.asList(1,2,3));
      // List<Integer> data2=data.stream().map(num->num*2).collect(Collectors.toList());
       List<Integer> data2=data.stream().map(func).toList();
       //List<Integer> data2=data.stream().map(n->n*2).toList();
       System.out.println(data2);
	}

}
