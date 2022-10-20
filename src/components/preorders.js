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

<div className="videotitle">The Simpsons - November 2022</div>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1034">
    <img className="pinlist-image" alt="1034" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/a1/89/81/8496/8496.ce68e513.png"/><div className="pinname">Pins on Fire Exclusive</div></Link></div></li>
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1036">
    <img className="pinlist-image" alt="1036" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/e7/0d/b3/8652/8652.ce68e513.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1037">
    <img className="pinlist-image" alt="1037" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/80/4a/2d/8501/8501.ce68e513.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1038">
    <img className="pinlist-image" alt="1038" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/0c/6c/ad/8647/8647.ce68e513.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1039">
    <img className="pinlist-image" alt="1039" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/98/3f/b8/8506/8506.ce68e513.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1040">
    <img className="pinlist-image" alt="1040" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d0/0c/32/8511/8511.ce68e513.png"/></Link></div></li>    
</ul>

        </div>
    );
}

export default Preorders;


