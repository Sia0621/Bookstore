package com.demo.bookstore.dao;

import com.demo.bookstore.entity.Message;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MessageDao {
    public List<Message> getAllMessages();
    public Message getMessageById(@Param("id") int id);
    public int addMessage(Message message);
    public int deleteMessage(@Param("id") int id);
}
