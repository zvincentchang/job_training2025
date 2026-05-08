package demo.springmvc;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import model.Users;

@Api(value = "User Management System")
@RestController
public class UserController {

	@ApiOperation(value = "Get a user by ID", response = Users.class)
	@GetMapping("/users/{id}")
	public ResponseEntity<Users> getUserById(@PathVariable Long id) {

	    // ...
       return ResponseEntity.ok(new Users());
	}

	@ApiOperation(value = "Delete a user by ID")
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Void> deleteUser(
	  @ApiParam(value = "ID of the user to be deleted", required = true)
	  @PathVariable Long id) 
	{

	    // ...
		return ResponseEntity.ok().build();
	}
	@ApiOperation(value = "Create a new user")
	@ApiResponses(value = {
	    @ApiResponse(code = 201, message = "Successfully created user"),
	    @ApiResponse(code = 400, message = "Invalid input"),
	    @ApiResponse(code = 500, message = "Internal server error")
	})
	@PostMapping("/users")
	public ResponseEntity<Users> createUser(@RequestBody Users user) {
	    // ...
		 return ResponseEntity.ok(new Users());
	}

	@ApiOperation(value = "Get users by status")
	@ApiImplicitParams({
	@ApiImplicitParam(name = "status", value = "Status of the user",
	required = true, dataType = "string", paramType = "query")
	})
	@GetMapping("/users")
	public ResponseEntity<List<Users>> getUsersByStatus(@RequestParam 	String status) {
	    // ...
		return ResponseEntity.ok(new ArrayList<Users>());
	}

}

