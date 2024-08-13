package com.demo.bookstore.service.impl;

import com.demo.bookstore.dao.UserDao;
import com.demo.bookstore.entity.User;
import com.demo.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public List<User> getUsers() {
        return userDao.getAllUsers();
    }

    @Override
    public User getUser(int id) {
        return userDao.getUserById(id);
    }

    @Override
    public void saveUser(User user) {
        userDao.addUser(user);
    }

    @Override
    public void deleteUser(int id) {
        userDao.deleteUser(id);
    }

    @Override
    public void updateUser(User user) {
        userDao.updateUser(user);
    }

    @Override
    public boolean isUserExist(String email) {
        return userDao.getUserByEmail(email) != null;
    }

    @Override
    public boolean isUserExistByUsername(String username) {
        return userDao.getUserByUsername(username) != null;
    }

    @Override
    public User authenticate(String username, String password) {
        User user = userDao.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        else return null;
    }
}
