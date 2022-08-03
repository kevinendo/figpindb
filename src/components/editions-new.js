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
          <div className="edition" key={edition.edition + edition.volume}>
            <div className="edition-text-2"><b>{edition.product.product_family.name}</b> | <b>{edition.edition} Edition</b> | <b>{edition.product.rarity.toUpperCase()}</b></div>
            <div className="edition-text-2">Lot {edition.lot} | Volume of {edition.volume} | {edition.edition_release} | {edition.product.packaging}</div>          
            <div className="edition-text-2">Status: {edition.product.lifecycle_stage} | {edition.channel_name} | {edition.destination_name}</div>
            <div className="edition-text-2">Qty Claimed: {edition.claimed_count ? <b>{edition.claimed_count}</b> : <b>0 Claimed</b>} | {Math.ceil((edition.volume*.1*(Math.ceil(edition.claimed_count/edition.volume*10)))-edition.claimed_count)} claim(s) until Cohort {10*(Math.ceil(edition.claimed_count/edition.volume*10))}%</div>
         </div>
         
     ))}

     {(pinInfo.length === 0) ? <div className="edition"><div className="edition-text-2">Production history not available.</div></div> :   <div className="declaration"><div className="footer-text">Please note, the quanitity claimed information is not updated in real time. This is updated approximately once a week.</div></div>}


     </>
 );
}

export default Editions;
