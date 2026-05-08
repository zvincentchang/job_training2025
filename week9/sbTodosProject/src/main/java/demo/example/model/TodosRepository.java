package demo.example.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TodosRepository extends JpaRepository<TodoItem,Integer> {

}
