package com.demo.bookstore.service;

import com.demo.bookstore.entity.Order;
import com.demo.bookstore.entity.OrderResponse;

import java.util.List;

public interface OrderService {
    Order getOrderById(int id);
    List<Order> getAllOrders();
    void deleteOrder(int id);
    void saveOrder(Order order);
    void updateOrder(Order order);
    List<OrderResponse> searchAllOrders();
}
