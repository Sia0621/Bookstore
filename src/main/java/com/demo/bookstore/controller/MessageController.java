package com.demo.bookstore.controller;


import com.demo.bookstore.entity.Message;
import com.demo.bookstore.service.MessageService;
import com.demo.bookstore.service.RecaptchaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    MessageService messageService;

    @Autowired
    RecaptchaService recaptchaService;

    @GetMapping
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable int id) {
        return messageService.getMessage(id);
    }

    @PostMapping
    public ResponseEntity<?> createMessage(@RequestBody Map<String, Object> request) {
        String name = (String) request.get("name");
        String email = (String) request.get("email");
        String subject = (String) request.get("subject");
        String message = (String) request.get("message");
        String token = (String) request.get("token");

        boolean isRecaptchaValid = recaptchaService.verifyRecaptcha(token);
        if (!isRecaptchaValid) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Message newMessage = new Message();
        newMessage.setName(name);
        newMessage.setEmail(email);
        newMessage.setSubject(subject);
        newMessage.setMessage(message);
        messageService.addMessage(newMessage);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable int id) {
        messageService.deleteMessage(id);
    }
}
