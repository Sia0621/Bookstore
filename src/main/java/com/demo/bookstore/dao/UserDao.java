package com.demo.bookstore.dao;

import com.demo.bookstore.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserDao {
    public int addUser(User user);
    public User getUserById(@Param("id") int id);
    public int updateUser(User user);
    public int deleteUser(@Param("id") int id);
    public List<User> getAllUsers();
}
