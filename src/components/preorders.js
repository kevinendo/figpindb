import React from "react";
import { Link } from "react-router-dom";

function Preorders() {
    return (
        <div className="detail-box">
<h3 align="center">Preorders</h3>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Star Wars<br/>Jan 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/749">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/df/7c/3a/6831/6831.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/750">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/1f/b5/ce/6835/6835.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/751">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/f0/b5/59/6840/6840.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/752">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d3/5e/05/6845/6845.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/753">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d7/2f/55/6850/6850.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Star Wars<br/>Jan 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/795">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/12/b5/da/6905/6905.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/796">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/6d/e9/2d/6909/6909.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">What If...?<br/>Early 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/815">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/1e/3f/3d/6811/6811.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/816">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/02/32/cf/6816/6816.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/817">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/e3/31/71/6820/6820.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/819">
    <img className="pinlist-image" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/63/7b/80/6825/6825.ce68e513.png"/></Link></div></li>
</ul>


        </div>
    );
}

export default Preorders;


