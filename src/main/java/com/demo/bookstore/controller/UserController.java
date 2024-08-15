package com.demo.bookstore.controller;

import com.demo.bookstore.entity.User;
import com.demo.bookstore.service.RecaptchaService;
import com.demo.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    RecaptchaService recaptchaService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUser(id);
    }

    @PostMapping
    public void createUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateRegister(@RequestBody Map<String, Object> request) {
        boolean isAdmin = true;

        String username = (String) request.get("username");
        String password = (String) request.get("password");
        String email = (String) request.get("email");
        String address = (String) request.get("address");
        int flag = (Integer) request.get("isAdmin");
        if (flag == 1) {
            isAdmin = true;
        }else {
            isAdmin = false;
        }

        String token = (String) request.get("token");

        boolean isRecaptchaValid = recaptchaService.verifyRecaptcha(token);
        if (!isRecaptchaValid) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setAddress(address);
        user.setAdmin(isAdmin);
        userService.saveUser(user);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }

    @GetMapping("/isUserExist/{email}")
    public boolean isUserExist(@PathVariable String email) {
        return userService.isUserExist(email);
    }

    @GetMapping("/isUserExistByUsername/{username}")
    public boolean isUserExistByUsername(@PathVariable String username) {
        return userService.isUserExistByUsername(username);
    }
}
