package com.demo.bookstore.controller;

import com.demo.bookstore.entity.User;
import com.demo.bookstore.service.RecaptchaService;
import com.demo.bookstore.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    @Autowired
    private RecaptchaService recaptchaService;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Map<String, Object> request, HttpSession session) {
        String username = (String) request.get("username");
        String password = (String) request.get("password");
        String token = (String) request.get("token");

        boolean isRecaptchaValid = recaptchaService.verifyRecaptcha(token);
        if (!isRecaptchaValid) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        User user = userService.authenticate(username, password);
        if (user != null) {
            session.setAttribute("user", user);
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser(HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "Logged out";
    }
}
