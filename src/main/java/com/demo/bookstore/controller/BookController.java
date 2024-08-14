package com.demo.bookstore.controller;


import com.demo.bookstore.entity.Book;
import com.demo.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Value("${bookstore.path.upload}")
    private String uploadPath;

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

    @PostMapping("/upload")
    public ResponseEntity<?> addBook(@RequestParam("category") String category,
                                     @RequestParam("title") String title,
                                     @RequestParam("author") String author,
                                     @RequestParam("quantity") float price,
                                     @RequestParam("quantity") int quantity,
                                     @RequestParam("file") MultipartFile file) {
        if (file == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        String fileName = file.getOriginalFilename();
        String filePath = uploadPath + "/" + fileName;

        try{

            file.transferTo(new File(filePath));

        }catch (IOException e){
            e.printStackTrace();
        }

        Book book = new Book();
        book.setCategory(category);
        book.setTitle(title);
        book.setAuthor(author);
        book.setPrice(price);
        book.setQuantity(quantity);
        book.setImgPath(fileName);
        bookService.saveBook(book);
        return ResponseEntity.ok().body(null);
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
