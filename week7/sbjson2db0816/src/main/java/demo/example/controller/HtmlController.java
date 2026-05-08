package demo.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/product")
public class HtmlController {
  
  @GetMapping
  public String productJson() {
	  return "productjson";
  }
}
