import React, { useState, useEffect } from "react";
import NewPinDataService from "../services/new-pin";
import { Link } from "react-router-dom";
import '../App.css'
import { useLocation } from 'react-router-dom'

const PinsList = props => {
  const [pins, setPins] = useState([]);

  const retrievePins = () => {
    NewPinDataService.getIGLinks()
      .then(response => {
        console.log(response.data);
        setPins(response.data);        
      })
      .catch(e => {
        console.log(e);
      });
  };

useEffect(() => {
  retrievePins();
}, []);

  return(
    <div className="detail-box">
<h3 align="center">Instagram Links</h3>
      <ul className="gallery mw-gallery-traditional">
      {
          pins.map (pin => (
            <li key={pin.date} className="gallerybox">
        <div className="setbox">
        <a title="" href={pin.url}>
        <img alt="image" className="box-image" src={pin.img.replace(/^http:\/\//i, 'https://')}/>{pin.title}</a>
        </div>
           </li>
          ))
      }
      </ul>
      <br/>
     <p align="center" classname="pinname">FigpinDB is user supported. When you purchase through links on our site, we may earn an affiliate commission.</p>
      </div>
);
}
export default PinsList;