package com.api.neppoknowledge.neppoknowledgeweb.controller;

import com.api.neppoknowledge.neppoknowledgeweb.model.Category;
import com.api.neppoknowledge.neppoknowledgeweb.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping(value = "/category")
        public ResponseEntity <List<Category>> findAll(){
            return ResponseEntity.ok(categoryService.findAll());

    }

    @GetMapping(value = "/category/{id}")
    public ResponseEntity <Category> findById(@PathVariable Long id){
        return ResponseEntity.ok(categoryService.findById(id));
    }

    @PostMapping(value = "/category")
    public ResponseEntity<Category> saveCategory(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.save(category));
    }

}
