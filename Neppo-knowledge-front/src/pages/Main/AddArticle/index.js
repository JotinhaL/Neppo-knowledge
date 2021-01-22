import React, {Component} from 'react'
import {Jumbotron,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
import SimpleUploadText from './TextArea'
import Simpletitlearea from './TitleArea'


function AddArticle(){
    return(
    <div class = 'container-fluid'>

                    <Jumbotron>

                        <Simpletitlearea/>
                        <SimpleUploadText />
                        <Link to = '/'><Button class = "success" id = "bot">
                           Adicionar artigo
                        </Button>
                        </Link>
                    </Jumbotron>
            </div>
    )


}

export default AddArticle;