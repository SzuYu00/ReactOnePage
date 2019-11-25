import React , {Component}from 'react';
import image from '../../pic/gfOrchestra.jpg';

import {
    Link
  } from 'react-router-dom';

class Blogid_2 extends Component{
    render(){
      return (
        <div className="blogPost">      
        <div className="blogTitleThumb">
            <h1>Griffin 2nd Anniversary Orchestra</h1>
            <div><img className="imgFit" src={image} /></div>
        </div>
            <p className="blogText">The 2nd year since the establishment of 
            Griffin is just around the corner! To celebrate this event the 
            media department has decided to hold an anniversary orchestra during
            Christmas holiday. All contributers or participants of the program 
            are welcomed. Make sure to bring your friends and family for a 
            wonderful evening!
            </p>
            <p className="dateStamp"> posted on: 11/17/2019</p>
            <p className="dateStamp"><Link to="/">Return to Home</Link></p>
        
    </div> 
      );
    }
  }

export default Blogid_2; 