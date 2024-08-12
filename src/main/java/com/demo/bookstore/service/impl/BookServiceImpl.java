package com.demo.bookstore.service.impl;

import com.demo.bookstore.dao.BookDao;
import com.demo.bookstore.entity.Book;
import com.demo.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookDao bookDao;

    @Override
    public Book findBookById(int id) {
        return bookDao.getBookById(id);
    }

    @Override
    public List<Book> findAllBooks() {
        return bookDao.getAllBooks();
    }

    @Override
    public void saveBook(Book book) {
        bookDao.addBook(book);
    }

    @Override
    public void deleteBook(int id) {
        bookDao.deleteBookById(id);
    }

    @Override
    public void updateBook(Book book) {
        bookDao.updateBook(book);
    }

    @Override
    public List<Book> findRandomBooks(String category) {
        return bookDao.getRandomBook(category);
    }

    @Override
    public List<Book> findBooksByCategory(String category) {
        return bookDao.getBooksByCategory(category);
    }
}
