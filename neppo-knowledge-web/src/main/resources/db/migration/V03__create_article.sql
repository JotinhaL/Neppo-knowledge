CREATE TABLE IF NOT EXISTS ARTICLE(
    ID_ARTICLE INTEGER PRIMARY KEY AUTO_INCREMENT,
    TITLE VARCHAR (100),
    BODY MEDIUMBLOB,
    BODY_TXT TEXT,
    APPROVED INTEGER ,
    WHATEVER INTEGER,
    UNAPPROVED INTEGER,
    ID_SECTION INTEGER ,
    FOREIGN KEY (ID_SECTION) REFERENCES SECTION(ID_SECTION)
);


INSERT INTO ARTICLE VALUES (
  NULL, 'Como construir sua primeira aplição em angular', NULL ,'This guide explains how to setup your Angular project to begin using Angular Material. It includes information on prerequisites, installing Angular Material, and optionally displaying a sample material component in your application to verify your setup.
Angular Resources
If you are new to Angular or getting started with a new Angular application, see Angular''s full Getting Started Guide and Setting up your environment.
For existing applications, follow the steps below to begin using Angular Material.', 100 , 45, 4 , 1
);

INSERT INTO ARTICLE VALUES (
NULL, 'Spring Boot em Java 8+', NULL ,'O Spring Boot é um projeto-chave para a Spring IO, mas, por ser recente, muitos desenvolvedores ainda não tiveram um primeiro contato com ele e muitos dos já introduzidos ainda desconhecem algumas ou várias de suas possibilidades e recursos.
É uma ferramenta de alavancagem de produtividade e qualidade. Assim, se você é um desenvolvedor que lida com aplicações baseadas em Spring, deve ao menos conhecê-la.', 53, 0, 12 , 2
);

INSERT INTO ARTICLE VALUES (
NULL, 'React Hooks', NULL ,'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. This page provides an overview of Hooks for experienced React users. This is a fast-paced overview.', 0, 20, 234 , 1
);

