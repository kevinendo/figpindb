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
<div className="videotitle">Assassin's Creed - 12/16/22</div>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/U2">
    <img className="pinlist-image" alt="U2" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/dd/e7/b9/8852/8852.ce68e513.png"/><div className="pinname">FiGPiN Ultra</div></Link></div></li>    
</ul>
<br/>
<div className="videotitle">Star Wars The Book of Boba Fett - 12/21/22</div>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1121">
    <img className="pinlist-image" alt="1121" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/25/33/b1/8979/8979.ce68e513.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1122">
    <img className="pinlist-image" alt="1122" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/21/31/a6/8984/8984.ce68e513.png"/><div className="pinname">FiGPiN Shared Exclusive</div></Link></div></li>        
</ul>

<br/>
<div className="videotitle">Release Date Unknown</div>
<ul className="gallery mw-gallery-traditional-left"> 
       <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L78">
    <img className="pinlist-image" alt="L78" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/79/d2/84/8404/8404.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/L48">
    <img className="pinlist-image" alt="L48" src="/L48_img_url_med.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>   
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/830">
    <img className="pinlist-image" alt="830" src="/830_img_url_med.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1127">
    <img className="pinlist-image" alt="1127" src="/1127_img_url_med.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1129">
    <img className="pinlist-image" alt="1129" src="/1129_img_url_med.png"/><div className="pinname">Chalice Collectibles Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1130">
    <img className="pinlist-image" alt="1130" src="/1130_img_url_med.png"/><div className="pinname">Chalice Collectibles Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1030">
    <img className="pinlist-image" alt="1030" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/54/be/9c/8792/8792.ce68e513.png"/><div className="pinname">Disney Exclusive</div></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1164">
    <img className="pinlist-image" alt="1164" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/6a/4c/fa/9077/9077.ce68e513.png"/><div className="pinname">Chalice Collectibles Exclusive</div></Link></div></li>        
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/903">
    <img className="pinlist-image" alt="903" src="/903_img_url_med.png"/></Link></div></li>    
</ul>
<br/><br/>

<div className="home-category">Preorders</div>

<br/>
<div className="videotitle">Black Panther Wakanda Forever - Jan 2023</div>
<ul className="gallery mw-gallery-traditional-left">
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1128">
    <img className="pinlist-image" alt="1128" src="/1128_img_url_med.png"/><div className="pinname">AMC Theatres Exclusive</div></Link></div></li>    
</ul>
<br/>
<div className="videotitle">Star Wars The Book of Boba Fett - Jan 2023</div>
<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1121">
    <img className="pinlist-image" alt="1121" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/25/33/b1/8979/8979.ce68e513.png"/></Link></div></li>    
    <li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/1122">
    <img className="pinlist-image" alt="1122" src="http://s3.amazonaws.com/figpin-vault-images/FigpinImage/21/31/a6/8984/8984.ce68e513.png"/><div className="pinname">FiGPiN Shared Exclusive</div></Link></div></li>        
</ul>


        </div>
    );
}

export default Preorders;


