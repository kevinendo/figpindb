import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";
import { Link } from "react-router-dom";
import '../App.css'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const PinsList = props => {
  const [pins, setPins] = useState([]);
  const [searchName, setSearchName ] = useState("");
let page = 0;
const { search } = useLocation();
const values = queryString.parse(search);
if (values.page != null) {
  page = values.page;
} else {
  page = 1;
}

let prevPage = "";
let nextPage = "";

if (parseInt(page) == 1)  {
  prevPage = "/?page=16";
  nextPage = "/?page=" + (parseInt(page)+1);
} else if (parseInt(page) == 16) {
  prevPage = "/?page=" + (parseInt(page)-1);
  nextPage = "/?page=1";
} else {
  prevPage = "/?page=" + (parseInt(page)-1);
  nextPage = "/?page=" + (parseInt(page)+1);
}




  useEffect(() => {
    retrievePins();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const handleKeypress = e => {
  if (e.keyCode === 13) {
    findByName();
  }
};

  const retrievePins = () => {
    PinDataService.getAll(page)
      .then(response => {
        console.log(response.data);
        setPins(response.data);        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrievePins();
  };

  const find = (by, query) => {
    PinDataService.find(by, query)
      .then(response => {
        console.log(response.data);
        setPins(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = e => {
    e.preventDefault();
    find("name", searchName)
  };


  return(
    <div class="mw-content-ltr">
    
            <form class="search-box">
              <input id="myInput" class="search-input" type="search" placeholder="Search" aria-label="Search" placeHolder="Search by Name" value={searchName} onChange={onChangeSearchName} onKeyPress={handleKeypress}/>
              <button id ="myBtn" class="search-button" type="submit" onClick={findByName}>Search</button>
          </form>
    
      <ul class="gallery mw-gallery-traditional">
      {
          pins.map (pin => (
            <li class="gallerybox">
                <div class="pinbox">
                  <Link title={pin.name}  to={"/pinDetail/"+pin.number}>
                    <div class="thumb"><img class="pinlist-image" src={pin.img_url_med}/></div>
                    <div class="pinname">{pin.name}</div>
                    </Link>
                </div>
           </li>
          ))
      }
      </ul>
      <br/>
      <div class="center">
      <div class="pagination">
        <a href={prevPage}>&lt;</a>
        <a href="/?page=1">1</a>
        <a href="/?page=2">2</a>
        <a href="/?page=3">3</a>
        <a href="/?page=4">4</a>
        <a href="/?page=5">5</a>
        <a href="/?page=6">6</a>
        <a href="/?page=7">7</a>
        <a href="/?page=8">8</a>
        <a href="/?page=9">9</a>
        <a href="/?page=10">10</a>
        <a href="/?page=11">11</a>
        <a href="/?page=12">12</a>
        <a href="/?page=13">13</a>
        <a href="/?page=14">14</a>
        <a href="/?page=15">15</a>
        <a href="/?page=16">16</a>
        <a href={nextPage}>&gt;</a>
        </div>
        </div>
      </div>
);
}
export default PinsList;