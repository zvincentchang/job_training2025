package demo.example.controller;

import java.io.IOException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import demo.example.model.Product;
import demo.example.model.ProductDAO;
import demo.example.model.ProductForm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
public class MyUploadController {
	
	@Autowired
	ProductDAO productDAO;
	
    @GetMapping("/viewproduct")
	public ModelAndView show() {
	   ModelAndView mv=new ModelAndView("product");
	   return mv;
   }
    @PostMapping(value = { "/upload" })
	public void productSave(Model model, @ModelAttribute("productForm") ProductForm productForm) {

		Product product = null;
		product = new Product();
		product.setCreateDate(new Date());
		product.setCode(productForm.getCode());
		product.setName(productForm.getName());
		product.setPrice(productForm.getPrice());
		try {
			if (productForm.getFileData() != null) {
				byte[] image = null;
				try {
					image = productForm.getFileData().getBytes();
				} catch (IOException e) {
				}
				if (image != null && image.length > 0) {
					product.setImage(image);
				}
			}
			productDAO.save(product);
			System.out.println(productForm.getName()+"Saved");
		} catch (Exception e) {
			String message = e.getMessage();
			model.addAttribute("errorMessage", message);

		}
		
	}
    @GetMapping(value = "/images/{code}")
    public ModelAndView getImageByCode(@PathVariable("code")String code) {
    	ModelAndView mv=new ModelAndView("showproduct");    	
		mv.addObject("code", code);
    	return mv;
    }
    @GetMapping(value = { "/productImage/{code}" })
	public void productImage(HttpServletRequest request, HttpServletResponse response, Model model,
			@PathVariable("code") String code) throws IOException {
		Product product = null;
		if (code != null) {
			product = this.productDAO.findProduct(code);
		}
		if (product != null && product.getImage() != null) {
			response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
			response.getOutputStream().write(product.getImage());
		}
		response.getOutputStream().close();
	}
    
    @GetMapping(value = "/showall")
    public ModelAndView getAllImage() {
    	ModelAndView mv=new ModelAndView("showall");    	
		mv.addObject("products", productDAO.getAllProducts());
    	return mv;
    }

}


