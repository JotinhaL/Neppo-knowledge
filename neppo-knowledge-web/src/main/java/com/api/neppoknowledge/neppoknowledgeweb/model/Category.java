package com.api.neppoknowledge.neppoknowledgeweb.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "category",schema = "neppo_knowledge")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategory;


    private String name;


}
