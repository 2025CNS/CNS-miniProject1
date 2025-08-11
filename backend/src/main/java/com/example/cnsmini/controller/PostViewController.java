package com.example.cnsmini.controller;

import com.example.cnsmini.domain.Post;
import com.example.cnsmini.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class PostViewController {

    private final PostRepository postRepository;

    @GetMapping("/posts")
    public String listPosts(Model model) {
        model.addAttribute("posts", postRepository.findAll());
        return "posts"; // templates/posts.html
    }

    @GetMapping("/posts/{id}")
    public String viewPost(@PathVariable Long id, Model model) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Post not found: " + id));
        model.addAttribute("post", post);
        return "post-detail"; // templates/post-detail.html
    }
}