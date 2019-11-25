import React , {Component}from 'react';
import imageB1 from '../../pic/gfSaxDorm.jpg';
import imageB2 from '../../pic/gfOrchestra.jpg';
import imageB3 from '../../pic/gfRaidBossJr.jpg';

import {
    Link
  } from 'react-router-dom';


class HomePage extends Component{
    render(){
      return (
        <div className="HomePage">      

            <h1>Recent Blog Posts</h1>

            <div className="blogHomeThumb">
                <Link to="/blogid_1"><h2>Epic Sax Duo Brought by RFB and Architect</h2></Link>
                <div><Link to="/blogid_1"><img className="imgFit" src={imageB1} /></Link></div>
                <p className="blogText">This afternoon RFB and Architect will bring up 
                    an epic sax duo in the lobby of Griffin no.5 dorm.
                </p>
                <p className="dateStamp"> posted on: 11/23/2019</p>
            </div>

            <div className="blogHomeThumb">
                <Link to="/blogid_2"><h2>Griffin 2nd Anniversary Orchestra</h2></Link>
                <div><Link to="/blogid_2"><img className="imgFit" src={imageB2} /></Link></div>
                <p className="blogText">The 2nd year since the establishment of 
                Griffin is just around the corner! To celebrate this event the 
                media department has decided to hold an anniversary orchestra during
                Christmas holiday.
                </p>
                <p className="dateStamp"> posted on: 11/17/2019</p>
            </div>

            <div className="blogHomeThumb">
                <Link to="/blogid_3"><h2>Attention: Gigantic SOP MODII Jr On The Loose!!</h2></Link>
                <div><Link to="/blogid_3"><img className="imgFit" src={imageB3} /></Link></div>
                <p className="blogText">To all residents and travelers: Please stay away
                from the southern exercise fields and it's surrounding areas. 
                </p>
                <p className="dateStamp"> posted on: 11/11/2019</p>
            </div>

            
        </div> 
      );
    }
  }

export default HomePage;