package com.awsdemo.order_service;

import com.awsdemo.order_service.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
