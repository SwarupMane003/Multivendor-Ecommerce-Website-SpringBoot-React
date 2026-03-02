package com.shopsphere.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopsphere.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
