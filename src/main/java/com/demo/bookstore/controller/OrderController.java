package com.demo.bookstore.controller;


import com.demo.bookstore.entity.Order;
import com.demo.bookstore.entity.OrderResponse;
import com.demo.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/search")
        public List<OrderResponse> searchAllOrders() {
        return orderService.searchAllOrders();
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable int id) {
        return orderService.getOrderById(id);
    }

    @PostMapping
    public void createOrder(@RequestBody Order order) {
        orderService.saveOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable int id) {
        orderService.deleteOrder(id);
    }

    @PutMapping("/{id}")
    public void updateOrder(@PathVariable int id, @RequestBody Order order) {
        order.setId(id);
        orderService.updateOrder(order);
    }

}
