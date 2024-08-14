package com.demo.bookstore.dao;

import com.demo.bookstore.entity.Order;
import com.demo.bookstore.entity.OrderResponse;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface OrderDao {
    public List<Order> getAllOrders();
    public Order getOrderById(@Param("id") int id);
    public int addOrder(Order order);
    public int updateOrder(Order order);
    public int deleteOrder(@Param("id") int id);
    public List<OrderResponse> searchAllOrders();
}
