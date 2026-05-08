package demo.example.model;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "book_category")
public class BookCategory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	// mappedBy refers to the variable in Book
	@OneToMany(mappedBy = "bookCategory")
	private List<Book> books;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	}

	public BookCategory(String name) {
		super();
		this.name = name;
	}
	public BookCategory() {}
}
