package demo.springmvc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
 
@Controller
public class HelloWorldController {
 
    @RequestMapping(value="/hello",method=RequestMethod.GET)
    public String hello(Model model) {         
        model.addAttribute("greeting", "Hello Spring MVC");         
        return"helloworld";         
    }
    @RequestMapping(value = "/redirect", method = RequestMethod.GET)
    public String authorInfo(Model model) {        
        return "redirect:/hello";
    }

    @GetMapping("/user")
    public String userInfo(Model model,
            @RequestParam(value = "name", defaultValue = "Guest") String name) {
 
        model.addAttribute("name", name);
 
        if("admin".equals(name)) {
            model.addAttribute("email", "admin@demo.com");
        } else{
            model.addAttribute("email", "Not set");
        }
        return "userinfo";
    }
    @GetMapping("/{sitePrefix}/{language}/{id}/{naturalText}")
    public String documentView(Model model,
            @PathVariable(value = "sitePrefix") String sitePrefix,
            @PathVariable(value = "language") String language,
            @PathVariable(value = "id") Long id,
            @PathVariable(value = "naturalText") String naturalText) {
 
        model.addAttribute("sitePrefix", sitePrefix);
        model.addAttribute("language", language);
        model.addAttribute("id", id);
        model.addAttribute("naturalText", naturalText);
 
        String documentName = "Java tutorial for Beginners";
        if(id == 8080) {
            documentName = "Spring MVC for Beginners";
        }
 
        model.addAttribute("documentName", documentName);
 
        return "documentView";
    }
    
    @RequestMapping(value = "/savestr")
    @ResponseBody
    public String authorInfo2(Model model) {
        return "saved";
    } 


}
