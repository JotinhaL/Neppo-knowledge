package com.api.neppoknowledge.neppoknowledgeweb.service;

import com.api.neppoknowledge.neppoknowledgeweb.model.Category;


import java.util.List;

public interface CategoryService {
    List<Category> findAll();
    Category findById(Long id);
    Category save(Category category);
}
