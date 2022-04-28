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
<li className="gallerybox"><div className="newrelease-header">Dragon Ball Super</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/862">
    <img className="pinlist-image" alt="862" src="/862_img_url_med.png"/><div className="pinname">GameStop Exclusive</div></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/863">
    <img className="pinlist-image" alt="863" src="/863_img_url_med.png"/><div className="pinname">Alliance Exclusive</div></Link></div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/864">
    <img className="pinlist-image" alt="864" src="/864_img_url_med.png"/><div className="pinname">The Mighty Hobby Exclusive</div></Link></div></li>         
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Star Wars The Book of Boba Fett<br/>Summer 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/859">
    <img className="pinlist-image" alt="859" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/34/66/95/7394/7394.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/860">
    <img className="pinlist-image" alt="860" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/d0/7a/ec/7398/7398.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/861">
    <img className="pinlist-image" alt="861" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/77/6c/14/7403/7403.ce68e513.png"/></Link></div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/907">
    <img className="pinlist-image" alt="907" src="http://s3.us-east-2.amazonaws.com/figpinimages/FigpinImage/60/cf/6a/7413/7413.ce68e513.png"/><div className="pinname">FiGPiN Exclusive</div></Link></div></li>                
</ul>

<ul className="gallery mw-gallery-traditional-left">
<li className="gallerybox"><div className="newrelease-header">Squid Game<br/>October 2022</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/911">
    <img className="pinlist-image" alt="911" src="/911_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/912">
    <img className="pinlist-image" alt="912" src="/912_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>    
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/913">
    <img className="pinlist-image" alt="913" src="/913_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li> 
<li className="gallerybox"><div className="pinbox"><Link to="/pinDetail/914">
    <img className="pinlist-image" alt="914" src="/914_img_url_med.png"/></Link></div><div className="pinname">Walmart Exclusive</div></li>
</ul>

        </div>
    );
}

export default Preorders;


