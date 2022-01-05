import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";

const Links = props => {

const [pinInfo, setPin] = useState([]);

const getPin = pinNumber => {
  PinDataService.getLinks(pinNumber)
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
    <div className="center-wrapper">
         {(pinInfo.length !== 0) ? <div className="production-history"><b>WHERE TO BUY</b></div> : <div></div>}
             {pinInfo.map((link) => (
                <div className="edition" key = {link.store_name}>
                    <div className="buy-text">
                    <a href={link.url} target="_blank" rel="noreferrer">    
                    <img alt={link.store_name} className="buy-image" width="50" src={"../buy_" + link.store_id + ".png"}/> 
                    &nbsp;{link.store_name}</a></div>           
                </div>
             ))}
          {(pinInfo.length !== 0) ? <div className="declaration"><div className="footer-text">FigpinDB is user supported. When you purchase through links on our site, we may earn an affiliate commission.</div></div> : <div></div>}
             
     </div>    
);
}

export default Links;