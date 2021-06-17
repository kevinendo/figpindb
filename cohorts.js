import React, { Component } from "react";
import fetch from "../services/fetch-with-timeout"

let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("query");

  
class Cohorts extends Component {
    state = {
        pins: []
    }

    async componentDidMount() {

let pinNumber = document.location.pathname.split("/")[2];
          try {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: `{"search_term": "${pinNumber}","offset": 0,"limit": 5000}`
      };

      const response = await fetch('https://api.figpinvault.com/api/v1/newsfeed/search', requestOptions)
      if (response.ok) {
        const data = await response.json();       
        this.setState({ pins: data["results"] })  
      } else {
          throw new Error('No response.')
      }
    } catch (error) {
        return error
    }
}

      render() {
        return (

           <div class="flex-child">
<div class="production-history"><b>RECENT EVENTS</b></div>                
{this.state.pins.filter(function (pin) { return pin.serial.figpin.number == document.location.pathname.split("/")[2];}).map((pin) => (
<div>

              <div class="cohorts">
<div class="cohort-row">
<div class="cohort-left-column">{(pin.serial.user.username == null) ? "Anonymous" : pin.serial.user.username}</div>
<div class="cohort-right-column"><img width="10" src="/collection-power-icon.png"/> &nbsp;&nbsp;&nbsp; {pin.serial.user.collection_power.current_balance}</div>
</div>
<div class="cohort-row">
<div class="cohort-left-column"><img width="20" src={"/" + pin.story_action_type.name + ".png"}/> {pin.serial.edition} Ed. Lot {pin.serial.lot}</div>
<div class="cohort-right-column"><img width="8" src="/figpin-power-icon.png"/> &nbsp;&nbsp;&nbsp;&nbsp;{pin.serial.power.current_balance}</div>
</div>

<div class="five-columns">
<div class="column-item"><b>{pin.serial.sequence_no}</b><br/>of<br/><b>{pin.serial.volume}</b></div>
<div class="column-item"><b>{pin.serial.unlock_position}</b><br/>Unlock<br/>Position</div>
<div class="column-item"><b>{pin.serial.boosts.length}</b><br/>Boost<br/>Count</div>
<div class="column-item"><b>{pin.serial.power.factory_score}</b><br/>Factory<br/>Score</div>
<div class="column-item"><b>{pin.serial.power.story_points_total}</b><br/>Story<br/>Score</div>
</div>

</div>
              </div>
            ))}
         
           </div>
            
        );

      }

}
export default Cohorts