import './index.css';
import { Jumbotron, Button, Form, Col, Row, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faUsers, faInbox, faSmileBeam, faMeh, faFrown} from '@fortawesome/free-solid-svg-icons';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';
import App from './../../neppo-knowledge'



function Section() {
  
  
    const [exibirModalArticle, setExibirModalArticle] = useState(false)
    const [exibirModalSection, setExibirModalSection] = useState(false)
    const [exibirModalCategory, setExibirModalCategory] = useState(false)
    
    function handleFecharModalArticle(event){
      setExibirModalArticle(false);
      
    }
    
    function adicionarArticle (event) {
      setExibirModalArticle(true);
      event.preventDefault();
      
    }
    
    function handleFecharModalSection(event){
      setExibirModalSection(false);
      event.preventDefault();
    }
    
    function addSection (event) {
      setExibirModalSection(true);
      event.preventDefault();
    }
    
    function handleFecharModalCategory(event){
      setExibirModalCategory(false);
      event.preventDefault();
    }
    
  function addCategory (event) {
    setExibirModalCategory(true);
    event.preventDefault();
  }
  
  
  
  return (
    <div class="container-fluid">
  
    <Jumbotron>   
      <div class="row">
      <SideNav id = "sidebar"
      onSelect={(selected) => {
        
      }}
  >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
              <NavIcon>
                  <img src = "nepo-logo.png" id = "neppo-logo"></img>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Home
              </NavText>
          </NavItem>
          <NavItem eventKey="articles">
              <NavIcon>
                <FontAwesomeIcon icon = {faBookReader} id = "icons"></FontAwesomeIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Artigos
              </NavText>
              <NavItem eventKey="charts/linechart">
  
              </NavItem>
              
              <NavItem eventKey="charts/barchart">
  
              </NavItem>
          </NavItem>
          <NavItem eventKey="user">
              <NavIcon>
                <FontAwesomeIcon icon = {faUsers} id = "icons"></FontAwesomeIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Usuários
              </NavText>
              <NavItem eventKey="charts/linechart">
  
              </NavItem>
              
              <NavItem eventKey="charts/barchart">
  
              </NavItem>
          </NavItem>
          <NavItem eventKey="inbox">
              <NavIcon>
                <FontAwesomeIcon icon = {faInbox} id = "icons"></FontAwesomeIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Inbox
              </NavText>
              <NavItem eventKey="charts/linechart">
                  <NavText>
                      Line Chart
                  </NavText>
              </NavItem>
              
              <NavItem eventKey="charts/barchart">
                  <NavText>
                      Bar Chart
                  </NavText>
              </NavItem>
          </NavItem>
      </SideNav.Nav>
  </SideNav>
  <div class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 search">
      <Form>
        <Form.Row>
          <Col sm = "2">
            <Row id = "text-article"> Artigos </Row>
          </Col>
          <Col sm = "4" id = "search-articles">
            <Form.Control placeholder = "Procure um Artigo" ></Form.Control> 
          </Col>
          <Col sm = "3">
            <Link to = '/user'><Button class = "success" id = "bot">Ver conhecimento de base</Button></Link>
          </Col>
          <Col sm = "3">
            <Button class = "success" id = "bot" onClick = {adicionarArticle} >Adicionar</Button>
          </Col>
        </Form.Row>
      </Form>
      <div class = "col-sm-9 offset-sm-3 col-md-10 offset-md-2 text-information">
    
        <Form.Row>
          <Col sm = "5">
            <Row>Titulo do artigo</Row>
          </Col>
          <Col sm = "1">
            <Row> Artigos</Row>
          </Col>
          <Col sm = "1">
            <Row> Atualizado</Row>
          </Col>
          <Col sm = "1">
            <Row> Autores</Row>
          </Col>
          <Col sm = "1" id = "status-icon">
            <FontAwesomeIcon icon = {faFrown}></FontAwesomeIcon>
          </Col>
          <Col sm = "1" id = "status-icon">
          <FontAwesomeIcon icon = {faMeh}></FontAwesomeIcon>
          </Col >
          <Col sm = "1" id = "status-icon">
          <FontAwesomeIcon icon = {faSmileBeam}></FontAwesomeIcon>
          </Col>
        </Form.Row>
        </div>
        <div className = "line"></div>
        <div class = "col-sm-9 offset-sm-3 col-md-10 offset-md-2 text-response">
        <Form.Row id = "articles">
          <Col sm = "5">
            <Row>Expertimental</Row>
          </Col>
          <Col sm = "1">
            <Row> 1</Row>
          </Col>
          <Col sm = "1">
            <Row> 14/01</Row>
          </Col>
          <Col sm = "1">
            <Row> Jota</Row>
          </Col>
          <Col sm = "1">
            <Row> 0.0%</Row>
          </Col>
          <Col sm = "1">
            <Row> 0.0% </Row>
          </Col >
          <Col sm = "1">
            <Row> 0.0% </Row>
          </Col>
        </Form.Row>
        
        </div>
        <div className = "line"></div>
      </div>
        
      </div>
      
      <Modal show = {exibirModalArticle} onHide = {handleFecharModalArticle}> 
        <Modal.Header closeButton>
          <Modal.Title id = "modal-title">Adicionar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Link to = '/addarticle'><Button class = "success" id = "bot">
              Artigo
            </Button>
            </Link>
            <Button class = "success" id = "bot" onClick = {addSection}>
              Seção
            </Button>
            <Button class = "success" id = "bot" onClick = {addCategory}>
              Categoria
            </Button>
        </Modal.Body>
  
      </Modal>
  
      <Modal className = "modalsection" show = {exibirModalSection} onHide = {handleFecharModalSection}> 
        <Modal.Header closeButton>
          <Modal.Title id = "modal-title">Título seção</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite aqui o título da sua seção"></input>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" class="btn btn-primary mb-2" onClick = {handleFecharModalSection}>Adicionar seção</Button>
        </Modal.Footer>
      </Modal>
  
      <Modal className = "modalsection" show = {exibirModalCategory} onHide = {handleFecharModalSection}> 
        <Modal.Header closeButton>
          <Modal.Title id = "modal-title">Título da categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div class="form-group">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite aqui o título da sua categoria"></input>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" class="btn btn-primary mb-2" onClick = {handleFecharModalCategory}>Adicionar Categoria</Button>
        </Modal.Footer>
      </Modal>
    </Jumbotron>
    
      
  </div>
    );
  }

export default Section;