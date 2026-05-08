package demo.controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import model.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private List<User> userList = new ArrayList<>();
    
    @GetMapping
    public List<User> getAllUsers() {
       return userList;
    }
    @PostMapping
    public User createUser(@RequestBody User user) {
       userList.add(user);
       return user;
    }
}
