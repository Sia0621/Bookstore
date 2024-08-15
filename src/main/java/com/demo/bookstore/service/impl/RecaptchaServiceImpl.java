package com.demo.bookstore.service.impl;

import com.demo.bookstore.service.RecaptchaService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class RecaptchaServiceImpl implements RecaptchaService {
    @Value("${recaptcha.secret.key}")
    private String recaptchaSecret;

    private static final String RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

    @Override
    public boolean verifyRecaptcha(String recaptchaToken) {
        RestTemplate restTemplate = new RestTemplate();

        String url = String.format("%s?secret=%s&response=%s", RECAPTCHA_VERIFY_URL, recaptchaSecret, recaptchaToken);
        Map<String, Object> recaptchaResult = restTemplate.getForObject(url, Map.class);
        System.out.println(recaptchaResult.get("success"));

        boolean success = (Boolean) recaptchaResult.get("success");

        return success;
    }
}
