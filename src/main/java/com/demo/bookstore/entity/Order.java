package com.demo.bookstore.entity;

import lombok.Data;

@Data
public class Order {
    private int id;
    private int userId;
    private int bookId;
    private int quantity;
}
