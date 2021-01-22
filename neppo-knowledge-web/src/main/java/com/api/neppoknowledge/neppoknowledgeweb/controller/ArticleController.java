package com.api.neppoknowledge.neppoknowledgeweb.controller;

import com.api.neppoknowledge.neppoknowledgeweb.repository.ArticleRepository;
import com.api.neppoknowledge.neppoknowledgeweb.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.api.neppoknowledge.neppoknowledgeweb.model.Article;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import java.io.IOException;
import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    private ArticleService articleService;
    @Autowired
    private ArticleRepository articleRepository;


    @GetMapping(value = "/article")
    public ResponseEntity<List<Article>> findAll () {
        return ResponseEntity.ok(articleService.findAll());
    }

    @GetMapping(value = "/article/{id}")
    public ResponseEntity <Article> findById(@PathVariable Long id){
        return ResponseEntity.ok(articleService.findById(id));
    }

    @GetMapping(value = "/articlesBySection/{idSection}")
    public ResponseEntity<List<Article>> findBySection(@PathVariable Long idSection){
        return ResponseEntity.ok(articleService.findBySection(idSection));
    }

    @PostMapping(value = "/article")
    public ResponseEntity<Article> saveArticle(@RequestBody Article article){
        return ResponseEntity.ok(articleService.save(article));
    }

    @ResponseBody
    @PutMapping(value = "/upload/{idArticle}", consumes = {"multipart/form-data;charset=UTF-8"})
    public ResponseEntity<Article> uploadDispatchFile(@PathVariable Long idArticle, @RequestParam("file")MultipartFile file) throws IOException {
        return ResponseEntity.ok(articleService.uploadDispatchFile(idArticle, file));
    }
}
