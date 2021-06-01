
import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'

const PinsListSubset = props => {
  const [pins, setPins] = useState([]);
  const [searchName, setSearchName ] = useState("");
 
  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const handleKeypress = e => {
  if (e.keyCode === 13) {
    findByName();
  }
};

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

  const findByName = e => {
    e.preventDefault();
    pageTitle = searchName;
    getPin("name", searchName);
  };

  let pageTitle = "";

  if (searchName == "") {
    pageTitle = props.match.params.query;
  } else {
    pageTitle = searchName;
  }

  document.title = "FigPinDB | " + pageTitle;

  return(
    <div class="mw-content-ltr">
                  <form class="search-box">
              <input id="myInput" class="search-input" type="search" placeholder="Search" aria-label="Search" placeHolder="Search by Name" value={searchName} onChange={onChangeSearchName} onKeyPress={handleKeypress}/>
              <button id ="myBtn" class="search-button" type="submit" onClick={findByName}>Search</button>
          </form>
      <ul class="gallery mw-gallery-traditional">
      {
          pins.map(pin => (
            <li class="gallerybox">
                <div class="pinbox">
                  <Link to={"/pinDetail/"+pin.number}>
                    <div class="thumb"><img class="pinlist-image" src={pin.img_url_med}/></div>
                    <div class="pinname">{pin.name}</div>
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