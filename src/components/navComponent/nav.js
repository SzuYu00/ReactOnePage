
import React , {Component}from 'react';

import {
    Link
} from 'react-router-dom';

import NewsAPI from '../../components/newsAPI/newsAPI.js';

  class Nav extends Component{
    render(){
      return (
        <nav>      
            
            <h2>Navigate to:</h2>
            <ul>
                <li><Link to="/">Home</Link></li>

              
                
              
            </ul>
            <NewsAPI/>
            
        </nav> 
      );
    }
  }

export default Nav;
