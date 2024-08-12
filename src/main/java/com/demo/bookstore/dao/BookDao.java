package com.demo.bookstore.dao;

import com.demo.bookstore.entity.Book;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BookDao {
    public int addBook(Book book);
    public int updateBook(Book book);
    public int deleteBookById(@Param("id") int id);
    public List<Book> getAllBooks();
    public Book getBookById(@Param("id") int id);
    public List<Book> getRandomBook(@Param("category") String category);
    public List<Book> getBooksByCategory(@Param("category") String category);
}
