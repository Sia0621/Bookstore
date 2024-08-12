package com.demo.bookstore.service;

import com.demo.bookstore.entity.Book;

import java.util.List;

public interface BookService {
    Book findBookById(int id);
    List<Book> findAllBooks();
    void saveBook(Book book);
    void deleteBook(int id);
    void updateBook(Book book);
    List<Book> findRandomBooks(String category);
    List<Book> findBooksByCategory(String category);
}
