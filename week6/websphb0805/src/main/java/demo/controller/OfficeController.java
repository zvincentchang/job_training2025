package demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import model.*;
@RestController
public class OfficeController {
   @GetMapping(value="/offices/{oid}")
   public  Office getOffice(@PathVariable("oid")String oid) {
	   OfficeDAO dao=new OfficeDAO();
	   Office ofc=dao.getOfficeById(oid);
	   return ofc;
   }
}
