package demo.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import demo.example.model.*;


@Controller
public class BookController implements CommandLineRunner {
	
	@Autowired
	BookDAO dao;
	
	@Autowired
	BookCategoryDAO categoryDao;

	@GetMapping(value = "/bookCreate")
	public ModelAndView openFormCreate() {
		ModelAndView model = new ModelAndView("bookCreate");
		Iterable<BookCategory> categories = categoryDao.findAll();
		model.addObject("allBookCategories", categories);
		return model;
	}

	@PostMapping(value = "/bookCreate")
	public ModelAndView processFormCreate(@ModelAttribute Book book) {
		ModelAndView model = new ModelAndView("redirect:/bookRetrieveAll");
		dao.save(book);
		model.addObject(book);
		return model;
	}

	@GetMapping(value = { "/bookRetrieveAll", "/book" })
	public ModelAndView retrieveBooks() {

		ModelAndView model = new ModelAndView("bookList");
		Iterable<BookCategory> categories = categoryDao.findAll();
		model.addObject("allBookCategories", categories);
		BookCategory category = categories.iterator().next();// get first category
		model.addObject("bookCategory", category);
		Iterable<Book> books = dao.findAll();
		model.addObject("allBooks", books);
		return model;
	}

	@PostMapping(value = { "/bookRetrieveByCategory" })
	public ModelAndView retrieveBooksByCategory(
			@RequestParam(value = "id", required = false, defaultValue = "1") Long id) {
		ModelAndView model = new ModelAndView("bookList");
		Iterable<BookCategory> categories = categoryDao.findAll();
		model.addObject("allBookCategories", categories);
		BookCategory category = categoryDao.findOne(id);
		model.addObject("bookCategory", category);
		model.addObject("allBooks", category.getBooks());
		return model;
	}

	@GetMapping(value = "/bookUpdate")
	public ModelAndView openFormUpdate(@RequestParam(value = "id", required = false, defaultValue = "1") Long id) {
		ModelAndView model = new ModelAndView("bookUpdate");
		Book book = dao.findOne(id);
		model.addObject(book);
		Iterable<BookCategory> categories = categoryDao.findAll();
		model.addObject("allBookCategories", categories);
		return model;
	}

	@PostMapping(value = "/bookUpdate")
	public ModelAndView processFormUpdate(@ModelAttribute Book book) {
		ModelAndView model = new ModelAndView("redirect:/bookRetrieveAll");
		dao.save(book);

		return model;
	}

	@GetMapping(value = "/bookDelete")
	public ModelAndView deleteBook(@RequestParam(value = "id", required = false, defaultValue = "1") Long id) {
		ModelAndView model = new ModelAndView("redirect:/bookRetrieveAll");
		dao.deleteById(id);
		return model;
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		categoryDao.save(new BookCategory("Fruits"));
		categoryDao.save(new BookCategory("Foods"));
	}
}
 

