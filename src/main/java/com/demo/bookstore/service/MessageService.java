package com.demo.bookstore.service;

import com.demo.bookstore.entity.Message;

import java.util.List;

public interface MessageService {
    void addMessage(Message message);
    Message getMessage(int id);
    List<Message> getAllMessages();
    void deleteMessage(int id);
}
