package com.api.neppoknowledge.neppoknowledgeweb.service;

import com.api.neppoknowledge.neppoknowledgeweb.model.Article;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;


public interface ArticleService {
    List<Article> findAll();
    Article findById(Long id);
    Article save(Article article);
    List<Article> findBySection( Long idSection);
    Article uploadDispatchFile(Long idArticle, MultipartFile file) throws IOException;
}
