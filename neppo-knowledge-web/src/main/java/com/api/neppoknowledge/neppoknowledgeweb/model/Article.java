package com.api.neppoknowledge.neppoknowledgeweb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "article",schema = "neppo_knowledge")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idArticle;

    private String title;
    private byte[] body;
    private String bodyTxt;
    private Integer approved;
    private Integer whatever;
    private Integer unapproved;
    @ManyToOne(fetch = FetchType.EAGER,  cascade=CascadeType.MERGE)
    @JoinColumn(name="ID_SECTION")
    private Section section;


}


