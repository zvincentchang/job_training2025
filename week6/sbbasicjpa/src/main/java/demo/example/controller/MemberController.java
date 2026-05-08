package demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import demo.example.model.*;

@RestController
public class MemberController {
	
	@Autowired
	MemberRepository memberAccount;
	
	@PostMapping(value="/addMember")
    public String addMemberPage(@RequestBody Member m){   
		boolean f=memberAccount.save(m)!=null ? true : false;        
		return f ? "addMember success": "addMember Failed";
    }
	@GetMapping(value="/getall")
    public List<Member> showAllMemberPage(){  			
        return memberAccount.findAll();
    }
	@GetMapping(value="/member/{memberName}")
    public List<Member> findMemberPage(@PathVariable("memberName")String name){  			
        return memberAccount.findByName(name);
    }


}
