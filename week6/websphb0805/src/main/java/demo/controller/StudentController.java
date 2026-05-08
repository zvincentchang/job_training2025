package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.*;
import model.*;

@Controller
@RequestMapping(value="/student")
public class StudentController {

	@RequestMapping(method = RequestMethod.GET)
	public String listStudent(ModelMap model) {
		List<Student> data = new StudentDAO().getAll();
		System.out.println(data);
		model.addAttribute("message", data);
		return "showStudent";
	}	
	@RequestMapping(value="/json",method = RequestMethod.GET)
	public @ResponseBody List<Student> listJsonStudent() {
		List<Student> data = new StudentDAO().getAll();
		System.out.println(data);		
		return data;
	}
	@RequestMapping(value = "/addStudent", method = RequestMethod.POST)
	public ModelAndView addStudent(@ModelAttribute("student") Student stu) {
		System.out.println("stu obj:" + stu);
		StudentDAO dao= new StudentDAO();
		dao.addStu(stu);		
		return  new ModelAndView("showStudent","message",dao.getAll());

	}

	@RequestMapping(value="/add",method = RequestMethod.POST)
	public @ResponseBody List<Student> addJsonStudent(@RequestBody Student st) {
		StudentDAO dao= new StudentDAO();
		System.out.println(st);
		dao.addStu(st);
		return dao.getAll();
	}
	@RequestMapping(value = "/updateStudent", method = RequestMethod.POST)
	public ModelAndView updateStudent(@ModelAttribute("student") Student stu) {
		System.out.println("update stu obj:" + stu);
		StudentDAO dao=new StudentDAO();
		dao.updateStu(stu);		
		return  new ModelAndView("showStudent","message",dao.getAll());
	}
	@RequestMapping(value = "/updateJsonStudent", method = RequestMethod.POST)
	public @ResponseBody List<Student> updateJsonStudent(@ModelAttribute("student") Student stu) {
		System.out.println("stu obj:" + stu);
		StudentDAO dao=new StudentDAO();
		dao.updateStu(stu);		
		return  dao.getAll();
	}
	@RequestMapping(value = "/deleteStudent", method = RequestMethod.POST)
	public ModelAndView deleteStudent(@ModelAttribute("student") Student stu) {
		System.out.println("stu obj:" + stu);
		StudentDAO dao= new StudentDAO();
		dao.deleteStu(stu);		
		return  new ModelAndView("showStudent","message",dao.getAll());

	}
	@RequestMapping(value = "/deleteJsonStudent", method = RequestMethod.POST)
	public @ResponseBody Student deleteJsonStudent(@ModelAttribute("student") Student stu) {
		System.out.println("stu obj:" + stu);
		StudentDAO dao= new StudentDAO();
		Student find=dao.findById(stu);
		if(find!=null) {
			dao.deleteStu(find);	
			return find;
		}else
			return new Student();	

	}

}
