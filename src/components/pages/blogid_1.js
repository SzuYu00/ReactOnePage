import React , {Component}from 'react';
import image from '../../pic/gfSaxDorm.jpg';

import {
    Link
  } from 'react-router-dom';

class Blogid_1 extends Component{
    render(){
      return (
        <div className="blogPost">      
            <div className="blogTitleThumb">
                <h1>Epic Sax Duo Brought by RFB and Architect</h1>
                <div><img className="imgFit" src={image} /></div>
            </div>
                <p className="blogText">This afternoon RFB and Architect will bring up 
                    an epic sax duo in the lobby of Griffin no.5 dorm. Make sure to 
                    grab some snacks and drinks and stop by!
                </p>
                <p className="dateStamp"> posted on: 11/23/2019</p>
                <p className="dateStamp"><Link to="/">Return to Home</Link></p>
                
            
        </div> 
      );
    }
  }

export default Blogid_1;