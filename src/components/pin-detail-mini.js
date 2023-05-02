import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";

const PinDetailMini = props => {
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
      });
  };

useEffect(() => {
  getPin(props.pinNumber);
}, [props.pinNumber]);

return (
    <>
                <div className="pinbox">
                  <Link title={pinInfo.name}  to={"/pinDetail/"+pinInfo.number}>
                    <div className="thumb"><img alt={pinInfo.name} className="pinlist-image" src={pinInfo.img_url_med.replace(/^http:\/\//i, 'https://')}/></div>
                    <div className="pinname">{pinInfo.availability}<br/>{ (pinInfo.limited_edition != null) ? <div className="pin-text">LE{pinInfo.limited_edition.$numberInt.toString()}</div> : <div></div>}</div>
                    </Link>
                </div>
     </>
 );
}

export default PinDetailMini;


