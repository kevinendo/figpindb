import React from "react";
import { Link } from "react-router-dom";

function Preorders() {
    return (
        <div className="detail-box">
<h3 align="center">Preorders</h3>


{/*
<h4 align="center">No Preorders at this time.</h4>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Star Wars<br/>Jan 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/795">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/12/b5/da/6905/6905.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/796">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/6d/e9/2d/6909/6909.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>
</ul>
*/}



<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Dragon Ball Super<br/>June 2022</div></li>
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/863">
    <img className="pinlist-image" alt="863" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d3/12/87/7451/7451.ce68e513.png"/><div className="pinname">Alliance Exclusive</div></Link></div></li>            
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Squid Game<br/>July 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/911">
    <img className="pinlist-image" alt="911" src="/911_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/912">
    <img className="pinlist-image" alt="912" src="/912_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/913">
    <img className="pinlist-image" alt="913" src="/913_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li> 
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/914">
    <img className="pinlist-image" alt="914" src="/914_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">My Hero Academia<br/>August 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/898">
    <img className="pinlist-image" alt="898" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/32/7c/e6/7158/7158.ce68e513.png"/><div className="pinname">Walmart Exclusive</div></Link></div></li>
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Obi-Wan Kenobi<br/>Fall 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1049">
    <img className="pinlist-image" alt="1049" src="/1049_img_url_med.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1050">
    <img className="pinlist-image" alt="1050" src="/1050_img_url_med.png"/></Link></div></li>    
</ul>

        </div>
    );
}

export default Preorders;


