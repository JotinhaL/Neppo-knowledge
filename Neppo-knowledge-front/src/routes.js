import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import NeppoKnowledge from './pages/Main'
import User from './pages/User'
import Articles from './pages/Articles'
import AddArticle from './pages/Main/AddArticle'
import Section from './pages/Section'



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {NeppoKnowledge} />
                <Route path = "/user" exact component = {User} />
                <Route path = "/article1" component = {Articles} />
                <Route path = "/addarticle" component = {AddArticle}/>
                <Route path = "/section" component = {Section}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;