package com.example.cnsmini.service;

import com.example.cnsmini.domain.Post;
import com.example.cnsmini.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public void createPost(String title, String content, String author) {
        Post post = new Post(title, content, author);
        postRepository.save(post);
    }
}