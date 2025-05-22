package com.awsdemo.order_service;

import com.awsdemo.order_service.OrderRepository;
import com.awsdemo.order_service.Order;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private final OrderRepository repository;

    public OrderController(OrderRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return repository.save(order);
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }
}
