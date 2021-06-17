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
  page = 0;
}

let prevPage = "";
let nextPage = "";

if (parseInt(page) === 0)  {
  prevPage = "/pins?page=16";
  nextPage = "/pins?page=" + (parseInt(page)+1);
} else if (parseInt(page) === 16) {
  prevPage = "/pins?page=" + (parseInt(page)-1);
  nextPage = "/pins?page=0";
} else {
  prevPage = "/pins?page=" + (parseInt(page)-1);
  nextPage = "/pins?page=" + (parseInt(page)+1);
}

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

useEffect(() => {
  retrievePins();
}, []);

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
    document.getElementById('page-foot').style.display = 'none';
    find("name", searchName)
  };


  return(
    <div className="detail-box">
    {/*
            <form className="search-box">
              <input id="myInput" className="search-input" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={onChangeSearchName} onKeyPress={handleKeypress}/>
              <button id ="myBtn" className="search-button" type="submit" onClick={findByName}>Search</button>
          </form>
    */}
      <ul className="gallery mw-gallery-traditional">
      {
          pins.map (pin => (
            <li key={pin.number} className="gallerybox">
                <div className="pinbox">
                  <Link title={pin.name}  to={"/pinDetail/"+pin.number}>
                    <div className="thumb"><img alt={pin.name} className="pinlist-image" src={pin.img_url_med.replace(/^http:\/\//i, 'https://')}/></div>
                    <div className="pinname">{pin.name}</div>
                    </Link>
                </div>
           </li>
          ))
      }
      </ul>
      <br/>
      <div className="center">
      <div id="page-foot" className="pagination">
        <a href={prevPage}>&lt;</a>
        { (parseInt(page) === 0) ? (<a className="active" href="/pins?page=0">0</a>) : ( <a href="/pins?page=0">0</a>) }
        { (parseInt(page) === 1) ? (<a className="active" href="/pins?page=1">1</a>) : ( <a href="/pins?page=1">1</a>) }
        { (parseInt(page) === 2) ? (<a className="active" href="/pins?page=2">2</a>) : ( <a href="/pins?page=2">2</a>) }
        { (parseInt(page) === 3) ? (<a className="active" href="/pins?page=3">3</a>) : ( <a href="/pins?page=3">3</a>) }
        { (parseInt(page) === 4) ? (<a className="active" href="/pins?page=4">4</a>) : ( <a href="/pins?page=4">4</a>) }
        { (parseInt(page) === 5) ? (<a className="active" href="/pins?page=5">5</a>) : ( <a href="/pins?page=5">5</a>) }
        { (parseInt(page) === 6) ? (<a className="active" href="/pins?page=6">7</a>) : ( <a href="/pins?page=6">6</a>) }
        { (parseInt(page) === 7) ? (<a className="active" href="/pins?page=7">7</a>) : ( <a href="/pins?page=7">7</a>) }
        { (parseInt(page) === 8) ? (<a className="active" href="/pins?page=8">8</a>) : ( <a href="/pins?page=8">8</a>) }
        { (parseInt(page) === 9) ? (<a className="active" href="/pins?page=9">9</a>) : ( <a href="/pins?page=9">9</a>) }
        { (parseInt(page) === 10) ? (<a className="active" href="/pins?page=10">10</a>) : ( <a href="/pins?page=10">10</a>) }
        { (parseInt(page) === 11) ? (<a className="active" href="/pins?page=11">11</a>) : ( <a href="/pins?page=11">11</a>) }
        { (parseInt(page) === 12) ? (<a className="active" href="/pins?page=12">12</a>) : ( <a href="/pins?page=12">12</a>) }
        { (parseInt(page) === 13) ? (<a className="active" href="/pins?page=13">13</a>) : ( <a href="/pins?page=13">13</a>) }
        { (parseInt(page) === 14) ? (<a className="active" href="/pins?page=14">14</a>) : ( <a href="/pins?page=14">14</a>) }
        { (parseInt(page) === 15) ? (<a className="active" href="/pins?page=15">15</a>) : ( <a href="/pins?page=15">15</a>) }
        { (parseInt(page) === 16) ? (<a className="active" href="/pins?page=16">16</a>) : ( <a href="/pins?page=16">16</a>) }
        <a href={nextPage}>&gt;</a>
        </div>
        </div>
      </div>
);
}
export default PinsList;