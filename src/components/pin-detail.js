import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import Editions from "../components/editions";
import { Link } from "react-router-dom"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Helmet } from 'react-helmet';

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
    });
};


useEffect(() => {
  getPin(props.match.params.number);
}, [props.match.params.number]);

const pinTags = pinInfo.tags.split(", ");
document.title = "FigPinDB | " + pinInfo.name;

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
    <div class="row"> 
        <div class="pin-text"><b>Property:</b> <Link to={"/property/"+pinInfo.property}>{pinInfo.property}</Link> (<Link to={"/licensor/"+pinInfo.licensor}>{pinInfo.licensor}</Link>)</div>    
        { pinInfo.sale_date ? <div class="pin-text"><b>Sale Date:</b> {pinInfo.sale_date}</div> : <div></div> }
        { pinInfo.availability ? <div class="pin-text"><b>Availability:</b> <Link to={"/availability/"+pinInfo.availability}>{pinInfo.availability}</Link></div> : <div></div> }
        { (pinInfo.limited_edition != null) ? <div class="pin-text"><b>Limited Edition:</b> {pinInfo.limited_edition.$numberInt.toString()}</div> : <div></div>}
        { pinInfo.type ? <div class="pin-text"><b>Type:</b> <Link to={"/type/"+pinInfo.type}>{pinInfo.type}</Link></div> : <div></div> }
        { pinInfo.notes ? <div class="pin-text"><b>Notes:</b> {pinInfo.notes}</div> : <div></div> }
       <ul class="tag-list">
        { pinInfo.variant ? <li class="tag-list-item"><Link to={"/variant/"+pinInfo.variant}>{pinInfo.variant}</Link></li> : <div></div> }
        { (pinInfo.tags != "") ? (
    <div>
      {
        pinTags.map(tag => (
          <div>
            <li class="tag-list-item"><Link to={"/tags/"+tag}>{tag}</Link></li>
          </div>
        ))
      }
    </div>
    ) : (
      <div></div>
    )
}
</ul>
<div class="image-carousel">
<AliceCarousel>
        <img width="300" className="sliderimg" src={pinInfo.img_cutout_url}/>
        <img width="300" className="sliderimg" src={pinInfo.img_url_lg}/>
        <img width="300" className="sliderimg" src={pinInfo.img_card_front_url}/>
        <img width="300" className="sliderimg" src={pinInfo.img_card_back_url}/>
</AliceCarousel>
</div>
        <Editions pinNumber={pinInfo.number}/>
    </div>
    </div>

</div>

      ) : (
        <div>No Pin</div>
      )}    

    </div>
  );
}

export default PinDetail;

