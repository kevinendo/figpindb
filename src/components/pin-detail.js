import React, { useState, useEffect, Redirect } from "react";
import PinDataService from "../services/pin";
import Editions from "../components/editions-new";
import CohortsNew from "../components/cohorts-new";
import Links from "../components/links";
import { Link } from "react-router-dom"
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from 'react-bootstrap/Carousel';

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
    variant_ids: "",
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
let pinArtists = "";
let pinVariants = "";
if (pinInfo) {
pinTags = pinInfo.tags.split(", ");
  if (pinInfo.variant_ids) {
    pinVariants = pinInfo.variant_ids.split(", ");
  }
pinArtists = pinInfo.artist_name.split(" / ");
document.title = "FigpinDB | " + pinInfo.name;
} 

return (
    <div>

      {pinInfo ? (
        <div>          
  <div className="detail-box">

<div className="name-container"><div className="name-box">{pinInfo.name}</div> <div className="number-box">{pinInfo.number}</div></div>
    <div className="detail-top-container"> 
      <div className="detail-top-child">
        <div className="pin-text"><span className="pin-text-category">Property:</span> <Link to={"/property/"+pinInfo.property}>{pinInfo.property}</Link> (<Link to={"/licensor/"+pinInfo.licensor}>{pinInfo.licensor}</Link>)</div>          
        { pinInfo.availability ? <div className="pin-text"><span className="pin-text-category">Availability:</span> <Link to={"/availability/"+pinInfo.availability}>{pinInfo.availability}</Link></div> : <div></div> }
        { (pinInfo.limited_edition != null) ? <div className="pin-text"><span className="pin-text-category">Limited Edition:</span> {pinInfo.limited_edition.$numberInt.toString()}</div> : <div></div>}

<div className="pin-text">
<span className="pin-text-category">Artist: </span>
{ (pinArtists.length === 2) ? <><Link title={pinArtists[0]} to={"/artist/"+pinArtists[0]}> {pinArtists[0]}</Link> / <Link title={pinArtists[1]} to={"/artist/"+pinArtists[1]}> {pinArtists[1]}</Link></> : <><Link title={pinArtists[0]} to={"/artist/"+pinArtists[0]}> {pinArtists[0]}</Link></> }
</div>
      </div><div className="detail-top-child">
        { pinInfo.sale_date ? <div className="pin-text"><span className="pin-text-category">Sale Date:</span> {pinInfo.sale_date}</div> : <div></div> } 
        { pinInfo.unlock_date ? <div className="pin-text"><span className="pin-text-category">Launch Date:</span> {pinInfo.unlock_date}</div> : <div></div> }
        
        { pinInfo.variant_ids ? <div className="pin-text"><span className="pin-text-category">Variants:</span>
      {
        pinVariants.map(v => (
          <span key={v}> <Link title={v} to={"/pinDetail/"+v}>{v}</Link></span>
        ))
      }
    </div> : <div></div> }
    { pinInfo.notes ? <div className="pin-text"><span className="pin-text-category">Notes:</span> {pinInfo.notes}</div> : <div></div> }
        </div>
        <div className="detail-top-child">
         <ul className="tag-list">
        { (pinInfo.type !== 'Classic') ?  <li className="tag-list-item"><Link to={"/type/"+pinInfo.type}>{pinInfo.type}</Link></li> : <div></div> }
        { pinInfo.variant ? <li className="tag-list-item"><Link to={"/variant/"+pinInfo.variant}>{pinInfo.variant}</Link></li> : <div></div> }
        { (pinInfo.tags !== "") ? (
    <div>
      {
        pinTags.map(tag => (
          <div key={tag}>
            <li className="tag-list-item"><Link title={tag} to={"/tags/"+tag}>{tag}</Link></li>
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
<hr className="detail-divider"/>
<div className="detail-bottom-container">
  <div className="detail-bottom-child">

<div className="image-carousel">

    <Carousel>
        <Carousel.Item interval={50000}>
        <img alt={pinInfo.name} width="300" className="sliderimg" src={pinInfo.img_cutout_url}/>
        </Carousel.Item>
        <Carousel.Item>
        <img alt={pinInfo.name} width="300" className="sliderimg" src={pinInfo.img_url_lg}/>
        </Carousel.Item>
        <Carousel.Item>
        <img alt={pinInfo.name} width="300" className="sliderimg" src={pinInfo.img_card_front_url}/>
        </Carousel.Item>
        <Carousel.Item>
        <img alt={pinInfo.name} width="300" className="sliderimg" src={pinInfo.img_card_back_url}/>
        </Carousel.Item>
        <Carousel.Item>
        <img alt={pinInfo.name} width="300" className="sliderimg-white" src={pinInfo.img_background_url}/>
        </Carousel.Item>
        { pinInfo.img_photo_1 ? <Carousel.Item><img alt={pinInfo.name} width="300" className="sliderimg-white" src={pinInfo.img_photo_1}/></Carousel.Item> : null  } 
        { pinInfo.img_photo_2 ? <Carousel.Item><img alt={pinInfo.name} width="300" className="sliderimg-white" src={pinInfo.img_photo_2}/></Carousel.Item> : null  } 
        { pinInfo.img_photo_3 ? <Carousel.Item><img alt={pinInfo.name} width="300" className="sliderimg-white" src={pinInfo.img_photo_3}/></Carousel.Item> : null  } 
        { pinInfo.img_photo_4 ? <Carousel.Item><img alt={pinInfo.name} width="300" className="sliderimg-white" src={pinInfo.img_photo_4}/></Carousel.Item> : null  } 
      </Carousel>

{/*
      <AliceCarousel swipeDisabled>
        <img width="300" className="sliderimg" src={pinInfo.img_cutout_url}/>
        <img width="300" className="sliderimg" src={pinInfo.img_url_lg}/>
        <img width="300" className="sliderimg" src={pinInfo.img_card_front_url}/>
        <img width="300" className="sliderimg" src={pinInfo.img_card_back_url}/>
      </AliceCarousel>
*/}
      </div>
  </div>
  <div className="detail-bottom-child">
   <Editions pinNumber={pinInfo.number}/>
 {/*   <CohortsNew pinNumber={pinInfo.number}/>*/}
  </div>
  <div className="detail-bottom-child">
    <Links pinNumber={pinInfo.number}/>
  </div>
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

