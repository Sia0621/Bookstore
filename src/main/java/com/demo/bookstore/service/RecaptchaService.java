package com.demo.bookstore.service;

public interface RecaptchaService {
    boolean verifyRecaptcha(String recaptchaToken);
}
