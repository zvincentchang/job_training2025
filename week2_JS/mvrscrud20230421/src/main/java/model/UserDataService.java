package model;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.NotFoundException;

public class UserDataService {

    private List <User> users = new ArrayList <User> ();
    public UserDataService() {
    	 users.add(new User(100L, "Amy", "amy@gmail.com"));
         users.add(new User(101L, "Mary", "mary@gmail.com"));
         users.add(new User(102L, "Tom", "tom@gmail.com"));
    }
    public List <User> findAll() {
       
        return users;
    }

    public User fetchBy(long id) throws NotFoundException {
        for (User user: findAll()) {
            if (id == user.getId()) {
                return user;
            } 
//            else {
//                throw new NotFoundException("Resource not found with Id :: " + id);
//            }
        }
        return null;
    }

    public boolean create(User user) {
        return users.add(user);
    }

    public boolean update(User user) {
        for (User updateUser: users) {
            if (user.getId().equals(updateUser.getId())) {
                users.remove(updateUser);
                users.add(user);
                return true;
            }
        }
        return false;
    }

    public boolean delete(Long id) throws NotFoundException {
        for (User user: users) {
            if (user.getId().equals(id)) {
                users.remove(user);
                return true;
            }
        }
        return false;
    }
}
