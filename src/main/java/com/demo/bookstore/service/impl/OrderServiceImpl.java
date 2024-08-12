package com.demo.bookstore.service.impl;

import com.demo.bookstore.dao.OrderDao;
import com.demo.bookstore.entity.Order;
import com.demo.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;

    @Override
    public Order getOrderById(int id) {
        return orderDao.getOrderById(id);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderDao.getAllOrders();
    }

    @Override
    public void deleteOrder(int id) {
        orderDao.deleteOrder(id);
    }

    @Override
    public void saveOrder(Order order) {
        orderDao.addOrder(order);
    }

    @Override
    public void updateOrder(Order order) {
        orderDao.updateOrder(order);
    }
}
