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
<li className="gallerybox"><div className="newrelease-header">My Hero Academia<br/>August 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/898">
    <img className="pinlist-image" alt="898" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/32/7c/e6/7158/7158.ce68e513.png"/><div className="pinname">Walmart Exclusive</div></Link></div></li>
</ul>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Squid Game<br/>September 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/911">
    <img className="pinlist-image" alt="911" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/a2/83/fa/7523/7523.ce68e513.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/912">
    <img className="pinlist-image" alt="912" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/04/45/35/7528/7528.ce68e513.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/913">
    <img className="pinlist-image" alt="913" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/a2/c3/66/7533/7533.ce68e513.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li> 
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/914">
    <img className="pinlist-image" alt="914" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/6e/c5/2e/7538/7538.ce68e513.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>
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


