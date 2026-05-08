package beans;

public class LoginBean {
	String user, password;
    String phone;
	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

//	@Override
//	public String toString() {
//		return "LoginBean [user=" + user + ", password=" + password + ", phone=" + phone + "]";
//	}

}
