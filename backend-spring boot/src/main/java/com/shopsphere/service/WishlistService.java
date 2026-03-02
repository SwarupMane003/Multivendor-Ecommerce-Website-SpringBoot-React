package com.shopsphere.service;


import com.shopsphere.exception.WishlistNotFoundException;
import com.shopsphere.model.Product;
import com.shopsphere.model.User;
import com.shopsphere.model.Wishlist;

public interface WishlistService {

    Wishlist createWishlist(User user);

    Wishlist getWishlistByUserId(User user);

    Wishlist addProductToWishlist(User user, Product product) throws WishlistNotFoundException;

}

