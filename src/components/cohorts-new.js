import React, { useState, useEffect } from "react";
import PinDataService from "../services/pin";

const CohortsNew = props => {

const [pinInfo, setPin] = useState([]);

const getPin = pinNumber => {
  PinDataService.getCohorts(pinNumber)
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
        {(pinInfo.length !== 0) ? <div className="production-history"><b>COHORTS</b></div> : <div></div>}
             {pinInfo.map((cohort) => (
                <div className="edition" key = {cohort.edition + cohort.volume}>
                    <div className="edition-text-1"><img alt={cohort.story_action_type} className="edition-text-1" width="27" src={"/" + cohort.story_action_type + ".png"}/> <b>{cohort.edition} Edition</b> | Lot {cohort.lot} | Volume of {cohort.volume}</div>           
                </div>
             ))}
     </div>    
);
}

export default CohortsNew;