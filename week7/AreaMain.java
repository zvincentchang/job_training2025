

public class AreaMain {

	public static void main(String[] args) {
         Calculate s1=new Square(10.0);
         System.out.println(s1.area());
         
         double width=10.0 , height=5.0;
         Calculate rectangle  = ( )  -> width*height;
         double radius=3.0;
         Calculate circle= ( ) -> Math.PI*radius*radius;
         MyArea  cal=(double...  x) ->{
        	   double temp=1.0;
        	   for(double v : x)
        		   temp*=v;
        	   return temp;
         };
         System.out.println(cal.area(width,height));
         System.out.println(cal.area(Math.PI,radius,radius));
	}

}

class Square implements Calculate {
     double side;
     public Square(double s) {
    	 side=s;
     }
	@Override
	public double area() {
		// TODO Auto-generated method stub
		return side*side;
	}
	
}