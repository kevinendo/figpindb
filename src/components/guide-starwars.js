import React from "react";
import PinDetailMini from "../components/pin-detail-mini";


function GuideStarwars() {
    return (
        <div className="detail-box">

<h3 align="center">Star Wars</h3>

<div className="home-category">The Force Awakens</div>
<ul className="gallery mw-gallery-traditional">
<li className="gallerybox"><PinDetailMini pinNumber="887"/></li>
<li className="gallerybox"><PinDetailMini pinNumber="888"/></li>
<li className="gallerybox"><PinDetailMini pinNumber="889"/></li>
</ul>
        </div>
    );
}

export default GuideStarwars;


