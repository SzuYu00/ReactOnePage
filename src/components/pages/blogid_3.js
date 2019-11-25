import React , {Component}from 'react';
import image from '../../pic/gfRaidBossJr.jpg';

import {
    Link
  } from 'react-router-dom';

class Blogid_3 extends Component{
    render(){
      return (
        <div className="blogPost">      
        <div className="blogTitleThumb">
            <h1>Attention: Gigantic SOP MODII Jr On The Loose!!</h1>
            <div><img className="imgFit" src={image} /></div>
        </div>
            <p className="blogText">To all residents and travelers: Please stay away
            from the southern exercise fields and it's surrounding areas. 
            The infamous mad scientist Dreamer abducted our city's robo mascot 
            SOP MODII Jr and turned it into a gigantic demolisher. Do not worry as 
            this is not the first time dealing with such breakout, 
            but make sure to stay away from the blockade zone to avoid unintended losses.
            </p>
            <p className="dateStamp"> posted on: 11/11/2019</p>
            <p className="dateStamp"><Link to="/">Return to Home</Link></p>
        
    </div> 
      );
    }
  }

export default Blogid_3; 