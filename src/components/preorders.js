import React from "react";
import { Link } from "react-router-dom";

function Preorders() {
    return (
        <div className="detail-box">
<h3 align="center">Preorders</h3>


{/*
<h4 align="center">There are no FiGPiNs on preorder at this time.</h4>
<h4 align="center">No Preorders at this time.</h4>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Star Wars<br/>Jan 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/795">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/12/b5/da/6905/6905.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/796">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/6d/e9/2d/6909/6909.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>
</ul>
*/}

<div className="videotitle">Black Panther Wakanda Forever - Jan 2023</div>
<ul className="gallery mw-gallery-traditional-left">
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1128">
    <img className="pinlist-image" alt="1128" src="/1128_img_url_med.png"/><div className="pinname">AMC Theatres Exclusive</div></Link></div></li>    
</ul>


        </div>
    );
}

export default Preorders;


