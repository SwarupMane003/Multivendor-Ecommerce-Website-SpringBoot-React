package com.shopsphere.ai.services;


import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;

@Service
public class AiProductServiceImpl implements AiProductService {

    @Value("${gemini.api.key}")
    private String apiKey;


    @Override
    public String simpleChat(String prompt) {
        return "";
    }
}
