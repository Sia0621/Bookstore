package com.demo.bookstore.controller;


import com.demo.bookstore.entity.Message;
import com.demo.bookstore.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    MessageService messageService;

    @GetMapping
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable int id) {
        return messageService.getMessage(id);
    }

    @PostMapping
    public void createMessage(@RequestBody Message message) {
        messageService.addMessage(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable int id) {
        messageService.deleteMessage(id);
    }
}
