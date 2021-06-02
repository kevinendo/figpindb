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
    <div class="flex-child">
         <div class="production-history"><b>Cohorts</b></div>
             {pinInfo.map((cohort) => (
                <div class="edition">
                    <div class="edition-text-1"><img alt={cohort.story_action_type} class="edition-text-1" width="27" src={"/" + cohort.story_action_type + ".png"}/> <b>{cohort.edition} Edition</b> | Lot {cohort.lot} | Volume of {cohort.volume}</div>           
                </div>
             ))}
     </div>    
);
}

export default CohortsNew;