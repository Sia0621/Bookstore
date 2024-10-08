package com.demo.bookstore;

import com.demo.bookstore.dao.BookDao;
import com.demo.bookstore.dao.MessageDao;
import com.demo.bookstore.dao.OrderDao;
import com.demo.bookstore.dao.UserDao;
import com.demo.bookstore.entity.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class BookstoreApplicationTests {

    @Autowired
    public BookDao bookDao;

    @Autowired
    public OrderDao orderDao;

    @Autowired
    public UserDao userDao;

    @Autowired
    public MessageDao messageDaoDao;

    @Test
    void testGetBooks() {
        List<Book> books = bookDao.getAllBooks();
        for (Book book : books) {
            System.out.println(book);
        }
    }

    @Test
    void testGetUsers() {
        List<User> users = userDao.getAllUsers();
        for (User user : users) {
            System.out.println(user);
        }
    }

    @Test
    void testGetOrders() {
        List<Order> orders = orderDao.getAllOrders();
        for (Order order : orders) {
            System.out.println(order);
        }
    }

    @Test
    void testGetMessages() {
        List<Message> messages = messageDaoDao.getAllMessages();
        for (Message message : messages) {
            System.out.println(message);
        }
    }

    @Test
    void testGetRandomBooks() {
        List<Book> books = bookDao.getRandomBook("best_seller");
        for (Book book : books) {
            System.out.println(book);
        }
    }

    @Test
    void testGetUserByEmail() {
        System.out.println(userDao.getUserByEmail("731402783@qq.com") != null);
    }

    @Test
    void testSearchAllOrders() {
        List<OrderResponse> orders = orderDao.searchAllOrders();
        for (OrderResponse order : orders) {
            System.out.println(order);
        }
    }


}
