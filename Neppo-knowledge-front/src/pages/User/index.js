import React from 'react'
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './index.css'

function User(){
    return(
        <div class = 'container-fluid'>
                <div class = "header-container">
                    <p>
                    <Link to = "/"><Button className = "back-button"><img src = "nepo-logo.png" id = "neppo-logo-user"></img></Button></Link>
                    Neppo Knowledge
                    </p>
                    <Row class="col-sm-9 offset-sm-3 col-md-10 offset-md-2" id = "search-text">
                        O que podemos ajudá-lo a encontrar?
                    </Row>
                    <Form.Control placeholder = "Procure por artigos" id = "search-box"/>
                </div>
            <Jumbotron>
 
            <div class="col-sm-9 offset-sm-3 col-md-10 offset-md-1" >
                <Form>
                    <Form.Row className = "user">
                        <Col sm = '4'>
                            <Button id = "article-button"><h3 id = "article-title">Lorem</h3></Button>
                           <h6>Lorem ipsum inceptos tempor et dapibus sem ipsum tortor arcu auctor, sollicitudin eu nostra taciti rhoncus cras primis aenean curabitur non, hac ut lacus gravida semper metus aliquet per donec. vehicula blandit aenean orci torquent ultricies metus vulputate, mattis congue pretium netus mollis ligula vivamus, imperdiet consequat nulla in est interdum. dictumst egestas imperdiet curae eu aliquam varius dictum euismod nunc malesuada pulvinar etiam fames vehicula nibh, sollicitudin auctor dui ultricies aenean sodales cursus libero diam lectus conubia suscipit hac. ac taciti varius laoreet dui sit quisque rhoncus in aenean quisque maecenas mollis dui, fusce lectus iaculis proin urna erat at venenatis tortor lacus massa non, class aenean sollicitudin tempus aliquam arcu molestie rutrum vitae dolor ligula cras. </h6>
                        </Col>
                        <Col sm = '4'>
                        <Button id = "article-button"><h3 id = "article-title">Ipsum</h3></Button>
                        <h6>Lorem ipsum inceptos tempor et dapibus sem ipsum tortor arcu auctor, sollicitudin eu nostra taciti rhoncus cras primis aenean curabitur non, hac ut lacus gravida semper metus aliquet per donec. vehicula blandit aenean orci torquent ultricies metus vulputate, mattis congue pretium netus mollis ligula vivamus, imperdiet consequat nulla in est interdum. dictumst egestas imperdiet curae eu aliquam varius dictum euismod nunc malesuada pulvinar etiam fames vehicula nibh, sollicitudin auctor dui ultricies aenean sodales cursus libero diam lectus conubia suscipit hac. ac taciti varius laoreet dui sit quisque rhoncus in aenean quisque maecenas mollis dui, fusce lectus iaculis proin urna erat at venenatis tortor lacus massa non, class aenean sollicitudin tempus aliquam arcu molestie rutrum vitae dolor ligula cras. </h6>
                        </Col>
                        <Col sm = '4'>
                        <Button id = "article-button"><h3 id = "article-title">React</h3></Button>
                        <h6>Lorem ipsum inceptos tempor et dapibus sem ipsum tortor arcu auctor, sollicitudin eu nostra taciti rhoncus cras primis aenean curabitur non, hac ut lacus gravida semper metus aliquet per donec. vehicula blandit aenean orci torquent ultricies metus vulputate, mattis congue pretium netus mollis ligula vivamus, imperdiet consequat nulla in est interdum. dictumst egestas imperdiet curae eu aliquam varius dictum euismod nunc malesuada pulvinar etiam fames vehicula nibh, sollicitudin auctor dui ultricies aenean sodales cursus libero diam lectus conubia suscipit hac. ac taciti varius laoreet dui sit quisque rhoncus in aenean quisque maecenas mollis dui, fusce lectus iaculis proin urna erat at venenatis tortor lacus massa non, class aenean sollicitudin tempus aliquam arcu molestie rutrum vitae dolor ligula cras. </h6>
                        </Col>
                    </Form.Row>
                    

                    <Form.Row className = "user">
                        <Col sm = '4'>
                        <Button id = "article-button"><h3 id = "article-title">JavaScript</h3></Button>
                           <h6>Lorem ipsum inceptos tempor et dapibus sem ipsum tortor arcu auctor, sollicitudin eu nostra taciti rhoncus cras primis aenean curabitur non, hac ut lacus gravida semper metus aliquet per donec. vehicula blandit aenean orci torquent ultricies metus vulputate, mattis congue pretium netus mollis ligula vivamus, imperdiet consequat nulla in est interdum. dictumst egestas imperdiet curae eu aliquam varius dictum euismod nunc malesuada pulvinar etiam fames vehicula nibh, sollicitudin auctor dui ultricies aenean sodales cursus libero diam lectus conubia suscipit hac. ac taciti varius laoreet dui sit quisque rhoncus in aenean quisque maecenas mollis dui, fusce lectus iaculis proin urna erat at venenatis tortor lacus massa non, class aenean sollicitudin tempus aliquam arcu molestie rutrum vitae dolor ligula cras. </h6>
                        </Col>
                        <Col sm = '4'>
                        <Button id = "article-button"><h3 id = "article-title">TypeScirpt</h3></Button>
                            <h6>Lorem ipsum inceptos tempor et dapibus sem ipsum tortor arcu auctor, sollicitudin eu nostra taciti rhoncus cras primis aenean curabitur non, hac ut lacus gravida semper metus aliquet per donec. vehicula blandit aenean orci torquent ultricies metus vulputate, mattis congue pretium netus mollis ligula vivamus, imperdiet consequat nulla in est interdum. dictumst egestas imperdiet curae eu aliquam varius dictum euismod nunc malesuada pulvinar etiam fames vehicula nibh, sollicitudin auctor dui ultricies aenean sodales cursus libero diam lectus conubia suscipit hac. ac taciti varius laoreet dui sit quisque rhoncus in aenean quisque maecenas mollis dui, fusce lectus iaculis proin urna erat at venenatis tortor lacus massa non, class aenean sollicitudin tempus aliquam arcu molestie rutrum vitae dolor ligula cras. </h6>
                        </Col>
                        <Col sm = '4'>
                        <Button id = "article-button"><h3 id = "article-title">Angular</h3></Button>
                            <h6>Lorem ipsum inceptos tempor et dapibus sem ipsum tortor arcu auctor, sollicitudin eu nostra taciti rhoncus cras primis aenean curabitur non, hac ut lacus gravida semper metus aliquet per donec. vehicula blandit aenean orci torquent ultricies metus vulputate, mattis congue pretium netus mollis ligula vivamus, imperdiet consequat nulla in est interdum. dictumst egestas imperdiet curae eu aliquam varius dictum euismod nunc malesuada pulvinar etiam fames vehicula nibh, sollicitudin auctor dui ultricies aenean sodales cursus libero diam lectus conubia suscipit hac. ac taciti varius laoreet dui sit quisque rhoncus in aenean quisque maecenas mollis dui, fusce lectus iaculis proin urna erat at venenatis tortor lacus massa non, class aenean sollicitudin tempus aliquam arcu molestie rutrum vitae dolor ligula cras. </h6>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
            </Jumbotron>
        </div>
    );
}

export default User;