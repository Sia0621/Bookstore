package com.demo.bookstore.entity;

import lombok.Data;

@Data
public class Message {
    private int id;
    private String name;
    private String email;
    private String subject;
    private String message;
}
