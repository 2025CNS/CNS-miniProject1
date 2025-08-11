package com.example.cnsmini.controller;

import com.example.cnsmini.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/posts")
    public String createPost(@RequestBody Map<String, String> request) {
        String title = request.get("title");
        String content = request.get("content");
        String author = request.get("author"); // ← 추가
        postService.createPost(title, content, author);
        return "게시물 업로드 완료!";
    }
}

