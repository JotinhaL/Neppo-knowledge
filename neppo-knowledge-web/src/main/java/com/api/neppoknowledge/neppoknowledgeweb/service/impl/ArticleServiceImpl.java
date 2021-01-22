package com.api.neppoknowledge.neppoknowledgeweb.service.impl;

import com.api.neppoknowledge.neppoknowledgeweb.model.Article;
import com.api.neppoknowledge.neppoknowledgeweb.model.Section;
import com.api.neppoknowledge.neppoknowledgeweb.repository.ArticleRepository;
import com.api.neppoknowledge.neppoknowledgeweb.repository.SectionRepository;
import com.api.neppoknowledge.neppoknowledgeweb.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private SectionRepository sectionRepository;
    public List<Article> findAll(){
        return articleRepository.findAll();
    }
    public Article findById(Long id){
        Optional<Article> article = articleRepository.findById(id);
        return article.get();
    }

    public Article save(Article article){
        return articleRepository.save(article);
    }

    public List<Article>findBySection(Long idSection){
        Optional<Section> section = sectionRepository.findById(idSection);
        List<Article> articles = articleRepository.findBySection(section.get());
        return articles;
    }

    public Article uploadDispatchFile(Long idArticle, MultipartFile file) throws IOException {
        Optional<Article> article = articleRepository.findById(idArticle);
        byte[] fileByte = file.getBytes();
        article.get().setBody(fileByte);
        articleRepository.save(article.get());
        return article.get();
    }

}
