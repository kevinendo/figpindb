import React, { useState, useEffect } from "react";
import NewPinDataService from "../services/new-pin";

const Editions = props => {

const [pinInfo, setPin] = useState([]);

const getPin = pinNumber => {
  NewPinDataService.getEditions(pinNumber)
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
      <div className="production-history"><b>PRODUCTION HISTORY</b></div>
        {pinInfo.map((edition) => (
          <div className="edition" key={edition.edition + edition.volume.$numberInt.toString()}>
            <div className="edition-text-2"><b>{edition.product.product_family.name}</b> | <b>{edition.edition} Edition</b> | <b>{edition.product.rarity.toUpperCase()}</b></div>
            <div className="edition-text-2">Lot {edition.lot} | Volume of {edition.volume.$numberInt.toString()} | {edition.manufacture_date} | {edition.product.packaging}</div>          
            <div className="edition-text-2">Status: {edition.product.lifecycle_stage} | {edition.channel_name} | {edition.destination_name}</div>
         </div>
     ))}

     {(pinInfo.length === 0) ? <div className="edition"><div className="edition-text-2">Production history not available.</div></div> : <div>Hello</div>}


     </>
 );
}

export default Editions;
