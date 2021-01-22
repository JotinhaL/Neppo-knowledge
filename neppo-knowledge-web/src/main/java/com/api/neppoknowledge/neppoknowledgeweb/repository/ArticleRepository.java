package com.api.neppoknowledge.neppoknowledgeweb.repository;

import com.api.neppoknowledge.neppoknowledgeweb.model.Article;
import com.api.neppoknowledge.neppoknowledgeweb.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
List<Article> findBySection(Section section);
}
