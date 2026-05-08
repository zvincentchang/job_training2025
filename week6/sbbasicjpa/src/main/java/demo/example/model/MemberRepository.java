package demo.example.model;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository  extends  JpaRepository<Member, Integer>{
	
	//List<Member> findAll();	
	List<Member> findByName(String name);

}
