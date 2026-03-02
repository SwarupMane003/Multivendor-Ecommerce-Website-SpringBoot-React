package com.shopsphere.repository;

import com.shopsphere.model.Cart;
import com.shopsphere.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import com.shopsphere.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {


    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);


}
