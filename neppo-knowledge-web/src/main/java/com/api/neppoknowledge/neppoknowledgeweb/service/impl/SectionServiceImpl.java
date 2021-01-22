package com.api.neppoknowledge.neppoknowledgeweb.service.impl;


import com.api.neppoknowledge.neppoknowledgeweb.model.Category;
import com.api.neppoknowledge.neppoknowledgeweb.model.Section;
import com.api.neppoknowledge.neppoknowledgeweb.repository.CategoryRespository;
import com.api.neppoknowledge.neppoknowledgeweb.repository.SectionRepository;
import com.api.neppoknowledge.neppoknowledgeweb.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SectionServiceImpl implements SectionService {
    @Autowired
    private SectionRepository sectionRepository;

    @Autowired
    private CategoryRespository categoryRespository;

    public List<Section> findAll(){
        return sectionRepository.findAll();
    }

    public Section findById(Long id){
        Optional<Section> section = sectionRepository.findById(id);
        return section.get();
    }

    public Section save(Section section){
        return sectionRepository.save(section);
    }

    public List<Section>findByCategory(Long idCategory){
        Optional<Category> category = categoryRespository.findById(idCategory);
        List<Section> sections = sectionRepository.findByCategory(category.get());
        return sections;
    }
}
