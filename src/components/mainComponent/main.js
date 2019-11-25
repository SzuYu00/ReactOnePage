import React , {Component}from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import HomePage from '../../components/pages/homePage.js';
import Blogid_1 from '../../components/pages/blogid_1.js';
import Blogid_2 from '../../components/pages/blogid_2.js';
import Blogid_3 from '../../components/pages/blogid_3.js';

class Main extends Component{
    render(){
      return (
        <main>      
            
            
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/blogid_1' component={Blogid_1}/>
            <Route exact path='/blogid_2' component={Blogid_2}/>
            <Route exact path='/blogid_3' component={Blogid_3}/>
            
        </main> 
      );
    }
  }

export default Main;
