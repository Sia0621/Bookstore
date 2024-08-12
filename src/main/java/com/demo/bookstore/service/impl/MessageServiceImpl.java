package com.demo.bookstore.service.impl;

import com.demo.bookstore.dao.MessageDao;
import com.demo.bookstore.entity.Message;
import com.demo.bookstore.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private MessageDao messageDao;

    @Override
    public void addMessage(Message message) {
        messageDao.addMessage(message);
    }

    @Override
    public Message getMessage(int id) {
        return messageDao.getMessageById(id);
    }

    @Override
    public List<Message> getAllMessages() {
        return messageDao.getAllMessages();
    }

    @Override
    public void deleteMessage(int id) {
        messageDao.deleteMessage(id);
    }
}
