
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
    <div class="mw-content-ltr">
 <h3>Unlock Calendar</h3>
      <ul class="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li class="gallerybox">
                <div class="pinbox">
                  <Link to={"/pinDetail/"+pin.number}>
                    <div class="thumb"><img class="pinlist-image" src={pin.img_url_med}/></div>
                    <div class="pinname">{pin.name}</div>
                    <div class="pinname">{pin.unlock_date}</div>
                    <div class="pinname">{pin.unlock_time}</div>
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