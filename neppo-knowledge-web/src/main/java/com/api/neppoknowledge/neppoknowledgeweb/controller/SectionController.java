package com.api.neppoknowledge.neppoknowledgeweb.controller;

import com.api.neppoknowledge.neppoknowledgeweb.model.Section;
import com.api.neppoknowledge.neppoknowledgeweb.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SectionController {
    @Autowired
    private SectionService sectionService;
    @GetMapping(value = "/section")
        public ResponseEntity <List<Section>> findAll(){
            return ResponseEntity.ok(sectionService.findAll());
    }

    @GetMapping(value = "/section/{id}")
        public ResponseEntity <Section> findById(@PathVariable Long id){
        return ResponseEntity.ok(sectionService.findById(id));
    }

    @GetMapping(value = "/sectionByCategory/{idCategory}")
    public ResponseEntity<List<Section>> findByCategory(@PathVariable Long idCategory){
        return ResponseEntity.ok(sectionService.findByCategory(idCategory));
    }

    @PostMapping(value = "/section")
    public ResponseEntity<Section> saveSection(@RequestBody Section section){
        return ResponseEntity.ok(sectionService.save(section));
    }
}
