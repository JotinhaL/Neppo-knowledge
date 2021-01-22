package com.api.neppoknowledge.neppoknowledgeweb.repository;

import com.api.neppoknowledge.neppoknowledgeweb.model.Category;
import com.api.neppoknowledge.neppoknowledgeweb.model.Section;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SectionRepository extends JpaRepository<Section, Long> {
    List<Section> findByCategory(Category category);
}
