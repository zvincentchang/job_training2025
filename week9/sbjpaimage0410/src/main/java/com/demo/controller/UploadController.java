package com.demo.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.model.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@RestController
public class UploadController {
	@Autowired
	ProductDAO productDAO;
    @GetMapping("/")
	public ModelAndView show() {
	   ModelAndView mv=new ModelAndView("product");
	   return mv;
   }
    @PostMapping(value = { "/api/upload" })
	public void productSave(Model model, @ModelAttribute("productForm") ProductForm productForm) {

		Product product = null;
		product = new Product();
		product.setCreateDate(new Date());
		product.setCode(productForm.getCode());
		product.setName(productForm.getName());
		product.setPrice(productForm.getPrice());
		try {
			File convFile = new File("src/main/resources/static/upload/"+productForm.getFileData().getOriginalFilename());
			convFile.createNewFile();
	        FileOutputStream fos = new FileOutputStream(convFile);
			if (productForm.getFileData() != null) {
				byte[] image = null;
				try {
					image = productForm.getFileData().getBytes();
					fos.write(image);
			        fos.close();
			        System.out.println("File Saved :"+convFile.getName());
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
            System.out.println("Error:"+e.getMessage());
		}
		
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
    @GetMapping(value = "/images/{code}")
    public ModelAndView getImageByCode(@PathVariable("code")String code) {
    	ModelAndView mv=new ModelAndView("showproduct");    	
		mv.addObject("code", code);
    	return mv;
    }


}


