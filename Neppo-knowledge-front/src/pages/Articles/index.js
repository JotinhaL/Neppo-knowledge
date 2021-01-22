import React from 'react'
import {Jumbotron,Row,Col,Form, Button, Modal} from 'react-bootstrap'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faMeh, faFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Articles(){


    return(
        <div class = 'container-fluid'>
                <div class = "header-container-articles">
                    <p>
                    <Link to = '/user'> <Button className = "back-button"><img src = "nepo-logo.png" id = "neppo-logo-user"></img></Button></Link>
                    Neppo Knowledge
                    </p>
                    <Row class="col-sm-9 offset-sm-3 col-md-10 offset-md-2" id = "search-text">
                        Lorem Ipsum
                    </Row>
                </div>
            <Jumbotron>
                <h4>Lorem ipsum amet lorem convallis gravida himenaeos dui a senectus, praesent cras nisi blandit dapibus consequat pharetra est. tortor at quis vitae class interdum nam commodo platea eu, fringilla vulputate ad pulvinar etiam proin ante a, habitant urna neque maecenas tempor integer rutrum pretium. aliquam tellus nulla potenti fusce commodo aliquam posuere hendrerit, felis litora malesuada hac sit mauris cras, eleifend vestibulum conubia fringilla phasellus sodales quam. ornare interdum molestie lorem mauris tortor dui sapien class elementum, nunc phasellus a fusce imperdiet aliquam hendrerit varius a, nam consequat ac laoreet primis congue dolor orci. 

Est quam id euismod sit tortor posuere curae massa pharetra vivamus molestie enim pharetra, curae sodales tempor hendrerit etiam cubilia elit himenaeos eget primis non. suspendisse nibh nostra lectus porttitor morbi pulvinar aliquam fames ullamcorper phasellus, sapien sem diam auctor rhoncus magna pulvinar ornare vitae, donec aenean proin ante est diam nec bibendum hendrerit. himenaeos dui hendrerit iaculis nibh blandit pretium facilisis curabitur nostra litora, justo vivamus litora aliquam libero aenean est cras nisl ac, sociosqu magna venenatis metus lorem aliquet senectus torquent ad. ornare leo curabitur nec proin blandit lectus nisl, hac rhoncus aenean nostra vivamus dapibus quisque leo, aenean leo sagittis nibh tristique quisque. 

Mollis cubilia tempor urna fermentum in curae interdum, torquent dui lacus per lacus et vulputate, molestie conubia dictum posuere leo nostra. class rhoncus et dictum justo hendrerit ac morbi aenean curabitur, justo pretium curabitur ligula justo iaculis tempus taciti. sollicitudin pretium ultricies risus in dictum sagittis dolor, senectus auctor varius lacinia velit conubia, vel pulvinar nibh justo eleifend sagittis. potenti dictum vehicula dapibus quam fermentum congue, primis tincidunt primis pulvinar semper porttitor iaculis, quam orci pellentesque ultrices tempus. sollicitudin imperdiet netus urna adipiscing interdum habitasse tempus tempor sollicitudin orci, vehicula aliquet dapibus amet aliquet feugiat litora nec sociosqu, bibendum metus vitae semper integer ornare varius ultricies integer. 

Elementum aliquam curabitur bibendum semper vitae accumsan rhoncus per himenaeos risus amet, odio ornare senectus nullam cras magna aenean aliquam sed suspendisse consequat velit, porta ligula purus pellentesque nunc lacus torquent sodales purus non. condimentum quam malesuada a sed metus pharetra platea quisque platea, fames aliquam convallis nostra suscipit ante vehicula auctor porttitor, mollis in nam dictum fames duis nibh curabitur. aenean litora molestie bibendum suspendisse mi curae mattis, vivamus tortor condimentum dictum venenatis quisque sociosqu, imperdiet dolor nullam mi etiam eu netus, euismod hendrerit ipsum molestie laoreet odio. blandit fames nibh hendrerit euismod donec hac in integer, cras iaculis nunc habitasse quis malesuada fusce porttitor, mi praesent interdum etiam ligula vitae cubilia. 

Curabitur facilisis volutpat curabitur sed cursus curabitur lorem pharetra donec, ornare erat suscipit viverra hendrerit dictum praesent sollicitudin, dictumst nulla commodo hendrerit mollis posuere primis pharetra. curae potenti euismod dictumst quisque magna ut, nam massa faucibus pulvinar maecenas, accumsan molestie eleifend volutpat et. vulputate suspendisse curabitur morbi diam condimentum nulla gravida justo vestibulum tellus ultrices, commodo cubilia felis semper neque lectus dictumst molestie aenean conubia, cubilia augue netus porttitor taciti etiam vehicula mattis convallis sit. fusce orci tristique consequat, aliquet.
 </h4>

            <Form >
                <h2 className = "satisfaction-ask">O que achou desse artigo?</h2>
                <Form.Row className = "satisfaction">

                    <Link to = '/user'><Button className = "satisfaction-button"><FontAwesomeIcon icon = {faSmileBeam}></FontAwesomeIcon></Button></Link>

                    <Link to = '/user'><Button className = "satisfaction-button"><FontAwesomeIcon icon = {faMeh}></FontAwesomeIcon></Button></Link>

                    <Link to = '/user'><Button className = "satisfaction-button"><FontAwesomeIcon icon = {faFrown}></FontAwesomeIcon></Button></Link>

                </Form.Row>
            </Form>
            </Jumbotron>
            </div>
    );
}

export default Articles;
