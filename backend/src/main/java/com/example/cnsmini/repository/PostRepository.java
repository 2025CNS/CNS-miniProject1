package com.example.cnsmini.repository;

import com.example.cnsmini.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}