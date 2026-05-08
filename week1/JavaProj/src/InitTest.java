
public class InitTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       MyInit m1=new MyInit();
       m1.display();
      // m1.value=3;
       MyInit m2=new MyInit();
       m2.display();
	}

}

class MyInit{
	static int value;
	{
		value++;
	}
	public void display() {
		System.out.println("value:"+value);
	}
}