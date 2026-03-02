package com.shopsphere.service;

import com.shopsphere.exception.SellerException;
import com.shopsphere.exception.UserException;
import com.shopsphere.request.LoginRequest;
import com.shopsphere.request.SignupRequest;
import com.shopsphere.response.AuthResponse;
import jakarta.mail.MessagingException;

public interface AuthService {

    void sentLoginOtp(String email) throws UserException, MessagingException;
    String createUser(SignupRequest req) throws SellerException;
    AuthResponse signin(LoginRequest req) throws SellerException;

}
