import React, { useState, useEffect, Redirect } from "react";
import PinDataService from "../services/pin";
import Editions from "../components/editions";
import CohortsNew from "../components/cohorts-new";
import { Link } from "react-router-dom"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const PinDetail = props => {
  const initialPinState = {
    _id: null,
    figpin_id: 0,
    name: "",
    number: "",
    number_suffix: 0,
    number_prefix: "",
    artist_name: "",
    lifecycle_stage: "",
    img_url_sm: "",
    img_url_med: "",
    img_url_lg: "",
    img_thumbnail_url: "",
    img_card_front_url: "",
    img_card_back_url: "",
    img_cutout_url: "",
    img_background_url: "",
    available_for_sale: false,
    currently_not_in_stock: true,
    property: "",
    licensor: "",
    sale_date: "",
    availability: "",
    variant: "",
    type: "",
    tags: "",
    notes: ""
  };

const [pinInfo, setPin] = useState(initialPinState);

const getPin = pin_id => {
  PinDataService.get(pin_id)
    .then(response => {
      setPin(response.data);
    })
    .catch(e => {
      console.log(e);
      <Redirect to="/" />
    });
};

useEffect(() => {
  getPin(props.match.params.number);
}, [props.match.params.number]);

let pinTags = "";
if (pinInfo) {
pinTags = pinInfo.tags.split(", ");
document.title = "FigPinDB | " + pinInfo.name;
} 

const items = [
  <div class="image-gallery-column"><img width="300" src={pinInfo.img_cutout_url}/></div>,
  <div class="image-gallery-column"><img width="300" src={pinInfo.img_url_lg}/></div>,
  <div class="image-gallery-column"><img width="300" src={pinInfo.img_card_front_url}/></div>,
  <div class="image-gallery-column"><img width="300" src={pinInfo.img_card_back_url}/></div>
];

  return (
    <div>

      {pinInfo ? (
        <div>          
  <div class="detail-box">
  <h3>{pinInfo.name} ({pinInfo.number})</h3>
    <div class="detail-top-container"> 
      <div class="detail-top-child">
        <div class="pin-text"><span class="pin-text-category">Property:</span> <Link to={"/property/"+pinInfo.property}>{pinInfo.property}</Link> (<Link to={"/licensor/"+pinInfo.licensor}>{pinInfo.licensor}</Link>)</div>          
        { pinInfo.availability ? <div class="pin-text"><span class="pin-text-category">Availability:</span> <Link to={"/availability/"+pinInfo.availability}>{pinInfo.availability}</Link></div> : <div></div> }
        { (pinInfo.limited_edition != null) ? <div class="pin-text"><span class="pin-text-category">Limited Edition:</span> {pinInfo.limited_edition.$numberInt.toString()}</div> : <div></div>}
      </div><div class="detail-top-child">
        { pinInfo.sale_date ? <div class="pin-text"><span class="pin-text-category">Sale Date:</span> {pinInfo.sale_date}</div> : <div></div> } 
        { pinInfo.unlock_date ? <div class="pin-text"><span class="pin-text-category">Unlock Date:</span> {pinInfo.unlock_date}</div> : <div></div> }
        { pinInfo.notes ? <div class="pin-text"><span class="pin-text-category">Notes:</span> {pinInfo.notes}</div> : <div></div> }
        </div>
        <div class="detail-top-child">
         <ul class="tag-list">
        { (pinInfo.type != 'Classic') ?  <li class="tag-list-item"><Link to={"/type/"+pinInfo.type}>{pinInfo.type}</Link></li> : <div></div> }
        { pinInfo.variant ? <li class="tag-list-item"><Link to={"/variant/"+pinInfo.variant}>{pinInfo.variant}</Link></li> : <div></div> }
        { (pinInfo.tags != "") ? (
    <div>
      {
        pinTags.map(tag => (
          <div>
            <li class="tag-list-item"><Link title={tag} to={"/tags/"+tag}>{tag}</Link></li>
          </div>
        ))
      }
    </div>
    ) : (
      <div></div>
    )
}
</ul>
</div>
</div><div>
<hr class="detail-divider"/>
<div class="detail-bottom-container">
<div class="detail-bottom-child">
<div class="image-carousel">
<AliceCarousel>
        <img width="300" className="sliderimg" src={pinInfo.img_cutout_url}/>
        <img width="300" className="sliderimg" src={pinInfo.img_url_lg}/>
        <img width="300" className="sliderimg" src={pinInfo.img_card_front_url}/>
        <img width="300" className="sliderimg" src={pinInfo.img_card_back_url}/>
</AliceCarousel>
</div>
</div>
<div class="detail-bottom-child">
        <Editions pinNumber={pinInfo.number}/></div>
        <div class="detail-bottom-child">
        <CohortsNew pinNumber={pinInfo.number}/></div>
        </div>
    </div>
    </div>

</div>

      ) : (
        <div><h3>Pin does not exist.</h3></div>
      )}    

    </div>
  );
}

export default PinDetail;

