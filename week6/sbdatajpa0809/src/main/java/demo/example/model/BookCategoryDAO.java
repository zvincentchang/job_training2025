package demo.example.model;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BookCategoryDAO extends CrudRepository<BookCategory, Long>{
   
	@Query(value = "select * from BookCategory where id = ?1", nativeQuery = true)
    BookCategory findOne(Long id);
}

