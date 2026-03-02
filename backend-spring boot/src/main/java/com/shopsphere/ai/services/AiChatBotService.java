package com.shopsphere.ai.services;

import com.shopsphere.exception.ProductException;
import com.shopsphere.response.ApiResponse;

public interface AiChatBotService {

    ApiResponse aiChatBot(String prompt,Long productId,Long userId) throws ProductException;
}
