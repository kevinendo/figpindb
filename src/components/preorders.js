import React from "react";
import { Link } from "react-router-dom";

function Preorders() {
    return (
        <div className="detail-box">
<h3 align="center">Upcoming / Preorders</h3>


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

<div className="home-category">Upcoming</div>

<br/>
<br/>
<div className="videotitle">Release Date Unknown</div>
<ul className="gallery mw-gallery-traditional-left"> 
       <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L78">
    <img className="pinlist-image" alt="L78" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/79/d2/84/8404/8404.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L48">
    <img className="pinlist-image" alt="L48" src="/L48_img_url_med.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>   
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1030">
    <img className="pinlist-image" alt="1030" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/54/be/9c/8792/8792.ce68e513.png"/><div className="pinname">Disney Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/830">
    <img className="pinlist-image" alt="830" src="/830_img_url_med.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/903">
    <img className="pinlist-image" alt="903" src="/903_img_url_med.png"/></Link></div></li>    
</ul>
<br/><br/>

<div className="home-category">Preorders</div>
<br/>

<div className="videotitle">Assassin's Creed - Jan 2023</div>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1000">
    <img className="pinlist-image" alt="849" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d9/fd/7c/8601/8601.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1001">
    <img className="pinlist-image" alt="847" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/9f/af/4c/8606/8606.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1002">
    <img className="pinlist-image" alt="846" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/46/87/a1/8611/8611.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1003">
    <img className="pinlist-image" alt="848" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/0c/1c/6d/8616/8616.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1004">
    <img className="pinlist-image" alt="850" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/dd/f9/a2/8621/8621.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L68">
    <img className="pinlist-image" alt="L70" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/70/54/8e/8857/8857.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
</ul>

<br/>

<div className="videotitle">Black Panther Wakanda Forever - Jan 2023</div>
<ul className="gallery mw-gallery-traditional-left">
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1128">
    <img className="pinlist-image" alt="1128" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/63/eb/0e/8999/8999.ce68e513.png"/><div className="pinname">AMC Theatres Exclusive</div></Link></div></li>    
</ul>

        </div>
    );
}

export default Preorders;


