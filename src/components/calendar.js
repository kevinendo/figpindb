
import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'

const Calendar = props => {
  const [pins, setPins] = useState([]);
 
  const getPin = (by, query) => {
    PinDataService.getCalendar()
      .then(response => {
        setPins(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  useEffect(() => {
    getPin();
  }, []);

let pageTitle = "Calendar";
  

  document.title = "FigPinDB | " + pageTitle;

  return(
    <div className="detail-box">
 <h3 align="center">Launch Calendar</h3>
      <ul className="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li key={pin.number} className="gallerybox">
                <div className="pinbox">
                  <Link to={"/pinDetail/"+pin.number}>
                    <div className="thumb"><img alt={pin.name} className="pinlist-image" src={pin.img_url_med}/></div>
                    <div className="pinname">{pin.name}</div>
                    <div className="pinname">{pin.unlock_date}</div>
                  
                    </Link>
                </div>
           </li>
          ))
      }
      </ul>
      </div>
);
}
export default Calendar;