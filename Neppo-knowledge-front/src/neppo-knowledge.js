import React, { Component } from 'react'
import Routes from './routes'
import './neppo-knowledge.css'
import api from './api'
import { render } from 'react-dom';

class App extends Component {

  
  async componentDidMount(){
    const responseSection = await api.get('/section');
    const responseCategory = await api.get('/category');
    console.log(responseSection.data, responseCategory.data);
  }

  render(){
    return(
      <Routes />
    );
  }
}




export default App;


