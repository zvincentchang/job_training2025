package demo.example.model;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BookDAO extends CrudRepository<Book, Long>{
  public List<Book> findByBookCategory(BookCategory category);
  
  @Query(value = "select * from Book where id = ?1", nativeQuery = true)
  Book findOne(Long id);
}

