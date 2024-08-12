package com.demo.bookstore.service;

import com.demo.bookstore.entity.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User getUser(int id);
    void saveUser(User user);
    void deleteUser(int id);
    void updateUser(User user);

}
