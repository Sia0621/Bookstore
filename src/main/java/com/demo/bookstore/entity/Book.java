package com.demo.bookstore.entity;

import lombok.Data;

@Data
public class Book {
    private int id;
    private String category;
    private String title;
    private String author;
    private float price;
    private int quantity;
    private String imgPath;
}
