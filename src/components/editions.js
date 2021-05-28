import React, { useState, useEffect } from "react";
import ExtPinDataService from "../services/external";
import { Link } from "react-router-dom"

const Editions = props => {

const [pinInfo, setPin] = useState([]);

const getPin = pinNumber => {
  ExtPinDataService.get(pinNumber)
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
    <div className="container">
     <div className="col-xs-12">
     <div class="production-history"><b>PRODUCTION HISTORY</b></div>
     {pinInfo.map((edition) => (
         <div class="edition">
           <div class="edition-text-1"><b>{edition.edition} Edition</b> | {edition.product.product_family.name} | {edition.product.packaging}</div>
           <div class="edition-text-2">Lot {edition.lot} | Volume of {edition.volume} | {edition.manufacture_date} | {edition.product.sku}</div>          
           <div class="edition-text-3">{edition.channel_name} | {edition.destination_name}</div>
         </div>

     ))}
     </div>
    </div>
 );
}

export default Editions;