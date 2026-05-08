package model;
import java.util.*;
public class ProductDAO {
	
	List<Product> products=new ArrayList<>();
	
	public ProductDAO() {}
	
	public List<Product> getAll(){
		return products;
	}
	
	public boolean add(Product p) {
		System.out.println("add method:"+p);
		return products.add(p);
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
    public void update(int i,Product p) {
    	products.set(i, p);
    }
	public boolean delete(Product p) {
		return products.remove(p);
	}
}
