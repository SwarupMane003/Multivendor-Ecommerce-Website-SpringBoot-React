package com.shopsphere.service;

import com.shopsphere.model.VerificationCode;

public interface VerificationService {

    VerificationCode createVerificationCode(String otp, String email);
}
