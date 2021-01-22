package com.api.neppoknowledge.neppoknowledgeweb.service.impl;

import com.api.neppoknowledge.neppoknowledgeweb.model.Category;
import com.api.neppoknowledge.neppoknowledgeweb.repository.CategoryRespository;
import com.api.neppoknowledge.neppoknowledgeweb.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRespository categoryRespository;
    public List<Category> findAll(){
        return categoryRespository.findAll();
    }

    public Category findById(Long id){
        Optional<Category> category = categoryRespository.findById(id);
        return category.get();
    }

    public Category save(Category category){
        return categoryRespository.save(category);
    }
}
