package com.demo.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.util.Base64;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.model.GoogleUser;
import com.demo.model.UserRepository;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.warrenstrange.googleauth.GoogleAuthenticator;
import com.warrenstrange.googleauth.GoogleAuthenticatorKey;

@RestController
@RequestMapping("/auth")
public class GoogleAuthController {
	private final GoogleAuthenticator gAuth = new GoogleAuthenticator();
    
	@Autowired
	UserRepository repository;
	@GetMapping("/generate-key")
	public String generateKey() {
		GoogleAuthenticatorKey key = gAuth.createCredentials();
		System.out.println("你的密鑰 (Secret Key): " + key.getKey());
		return key.getKey();
	}

	private String generateQRCodeImage(String data) throws WriterException {
		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		BitMatrix bitMatrix = qrCodeWriter.encode(data, BarcodeFormat.QR_CODE, 250, 250);
		BufferedImage image = new BufferedImage(250, 250, BufferedImage.TYPE_INT_RGB);
		for (int x = 0; x < 250; x++) {
			for (int y = 0; y < 250; y++) {
				image.setRGB(x, y, bitMatrix.get(x, y) ? 0x000000 : 0xFFFFFF);
			}
		}
		try {
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			ImageIO.write(image, "png", baos);
			return "data:image/png;base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
		} catch (Exception e) {
			return "無法產生 QR Code";
		}
	}
	
	 @GetMapping("/generate-qr")
	    public ModelAndView  generateQRCode(Model model) throws WriterException {
	        GoogleAuthenticatorKey key = gAuth.createCredentials();
	        String otpAuthURL = "otpauth://totp/Gjun App?secret=" + key.getKey() + "&issuer=Teacher";
	        String qrCodeBase64 = generateQRCodeImage(otpAuthURL);
	        model.addAttribute("qrCode", qrCodeBase64);
	        model.addAttribute("secret", key.getKey());
	        
	        return  new ModelAndView("qrview");
	    }
	 @PostMapping("/generate_save")
	    public ModelAndView  generateQRCodeAndSave(@RequestParam("username")String  name,Model model) throws WriterException {
	        GoogleAuthenticatorKey key = gAuth.createCredentials();
	        String otpAuthURL = "otpauth://totp/Gjun App?secret=" + key.getKey() + "&issuer="+name;
	        String qrCodeBase64 = generateQRCodeImage(otpAuthURL);
	        model.addAttribute("qrCode", qrCodeBase64);
	        model.addAttribute("secret", key.getKey());
	        model.addAttribute("username",name);
	        GoogleUser gu=new GoogleUser();
	        gu.setGooglekey(key.getKey());
	        gu.setName(name);
	        repository.save(gu);
	        return  new ModelAndView("qrview2");
	    }

}
