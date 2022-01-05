
import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'

const PinsListSubset = props => {
const [pins, setPins] = useState([]);

const getPin = (by, query) => {
    PinDataService.find(by, query)
      .then(response => {
        setPins(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  useEffect(() => {
    getPin(props.match.params.by, props.match.params.query);
  }, [props.match.params.by, props.match.params.query]);

  let pageTitle = props.match.params.query;
  document.title = "FigPinDB | " + pageTitle;

  return(
    <div className="detail-box">
    <h3 align="center">{pageTitle}</h3>

      <ul className="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li key={pin.number} className="gallerybox">
                <div className="pinbox">
                  <Link to={"/pinDetail/"+pin.number}>
                    <div className="thumb"><img alt={pin.name} className="pinlist-image" src={pin.img_url_med}/></div>
                    <div className="pinname">{pin.name}</div>
                    </Link>
                </div>
           </li>
          ))
      }
      </ul>
      </div>
);
}
export default PinsListSubset;