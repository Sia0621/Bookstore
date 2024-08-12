package com.demo.bookstore.controller;


import com.demo.bookstore.entity.Book;
import com.demo.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.findAllBooks();
    }

    @GetMapping("/random/{category}")
    public List<Book> getRandomBooks(@PathVariable String category) {
        return bookService.findRandomBooks(category);
    }

    @GetMapping("/{category}")
    public List<Book> getBooksByCategory(@PathVariable String category) {
        return bookService.findBooksByCategory(category);
    }

    @GetMapping("/details/{id}")
    public Book getBookById(@PathVariable int id) {
        return bookService.findBookById(id);
    }

    @PostMapping
    public void createBook(@RequestBody Book book) {
        bookService.saveBook(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id) {
        bookService.deleteBook(id);
    }

    @PutMapping("/{id}")
    public void updateBook(@PathVariable int id, @RequestBody Book book) {
        book.setId(id);
        bookService.updateBook(book);
    }
}
