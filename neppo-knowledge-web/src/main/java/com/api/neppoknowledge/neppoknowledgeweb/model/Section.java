package com.api.neppoknowledge.neppoknowledgeweb.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "section" , schema = "neppo-knowledge")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSection;

    private String name;
    @ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.ALL)
    @JoinColumn(name="ID_CATEGORY")
    private Category category;

    private Date updatedAt;
    private String author;
}
