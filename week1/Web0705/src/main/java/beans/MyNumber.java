package beans;

public class MyNumber {
	int value;

	public MyNumber() {
		int n = (int) (Math.random() * 100) + 1;
		value=n;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "MyNumber [value=" + value + "]";
	}

}
