

public interface Area {
    public default void print() {
    	System.out.println("Area: "+calculate());
    }
    double calculate();
}
abstract class Planet {	 
    protected void revolve() { // line n1 
    } 
    abstract void rotate(); // line n2
}