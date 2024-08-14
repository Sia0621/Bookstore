package com.demo.bookstore.entity;

import lombok.Data;

@Data
public class OrderResponse {
    private int id;
    private int userId;
    private String username;
    private int bookId;
    private String title;
    private int quantity;
}
