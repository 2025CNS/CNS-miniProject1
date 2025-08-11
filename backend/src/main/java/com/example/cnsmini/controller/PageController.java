package com.example.cnsmini.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "login";  // templates/login.html
    }

    @GetMapping("/signup")
    public String signupPage() {
        return "signup";  // templates/signup.html
    }

    @GetMapping("/post")
    public String postPage() {
        return "post";  // templates/post.html
    }

    @GetMapping("/postspage")
    public String postsPage() {
        return "posts";
    }

    @GetMapping("/post-detail")
    public String postDetailPage() {
        return "post-detail";
    }

    @GetMapping("/services")
    public String servicesPage() {
        return "services";
    }
}