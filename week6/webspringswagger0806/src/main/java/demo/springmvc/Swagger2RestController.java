package demo.springmvc;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import model.*;
 
@RestController
@Api(value = "Swagger2RestController", description = "REST Apis related to Student Entity!!!!")
public class Swagger2RestController {
 
  List<Student> students = new ArrayList<Student>();
  
  {
    students.add(new Student("Telsla", "IV", "India"));
    students.add(new Student("Amy", "V", "India"));
    students.add(new Student("John", "III", "USA"));
    students.add(new Student("Shelly", "VI", "USA"));
  }
 
  @RequestMapping(value = "/getStudents")
  @ApiOperation(value = "Get list of Students in the System ", 
  response = Student.class, tags = "所有學生資料")
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "成功|OK"),
        @ApiResponse(code = 401, message = "沒有權限!"), 
        @ApiResponse(code = 403, message = "禁止!!!"),
        @ApiResponse(code = 404, message = "檔案不存在!!!") })
  public List<Student> getStudents() {
    return students;
  }
 
  @RequestMapping(value = "/getStudent/{name}")
  @ApiOperation(value = "Get specific Name Student in the System ",
  response = Student.class, tags = "讀取學生名字資料")
  public Student getStudent(@PathVariable(value = "name") String name) {
    return students.stream().filter(x -> x.getName().equalsIgnoreCase(name)).collect(Collectors.toList()).get(0);
  }
  
  @RequestMapping(value = "/getStudentByCountry/{country}")
  @ApiOperation(value = "Get specific Student By Country in the System ",
  response = Student.class, tags = "讀取學生國家資料")
  public List<Student> getStudentByCountry(@PathVariable(value = "country") String country) {
    System.out.println("Searching Student in country : " + country);
    List<Student> studentsByCountry = students.stream().filter(x -> x.getCountry().equalsIgnoreCase(country))
          .collect(Collectors.toList());
    System.out.println(studentsByCountry);
    return studentsByCountry;
  }
 
  @RequestMapping(value = "/getStudentByClass/{cls}")
  @ApiOperation(value = "Get specific Student By Class in the System ",
  response = Student.class,tags="讀取學生班級資料")
  public List<Student> getStudentByClass(@PathVariable(value = "cls") String cls) {
    return students.stream().filter(x -> x.getCls().equalsIgnoreCase(cls)).collect(Collectors.toList());
  }
}

