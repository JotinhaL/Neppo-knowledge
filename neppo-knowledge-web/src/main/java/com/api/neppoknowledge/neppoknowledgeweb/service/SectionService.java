package com.api.neppoknowledge.neppoknowledgeweb.service;


import com.api.neppoknowledge.neppoknowledgeweb.model.Section;

import java.util.List;

public interface SectionService {
    List<Section> findAll();
    Section findById(Long id);
    Section save(Section section);
    List<Section> findByCategory(Long idCategory);
}
