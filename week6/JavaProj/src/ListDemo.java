import java.util.*;
public class ListDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	   List<Integer> values=Arrays.asList(1,2,3,1,2,3);
       List<Integer> data=new ArrayList<>(values);
       data.forEach(System.out::print);
       System.out.println();
       
       boolean b=data.remove(Integer.valueOf(1));
       System.out.println(b);
       //while(data.remove(Integer.valueOf(1)));
       for(  ;data.remove(Integer.valueOf(1));  );
       data.removeIf(i-> i==2 );
       data.replaceAll(i->i*2);
       data.forEach(System.out::print);
       
	}

}
