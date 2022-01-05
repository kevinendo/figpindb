import React, { useState, Component } from "react";
import { Link } from "react-router-dom";


let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("query");

class UnlocksSubset extends Component {
    state = {
        pins: []
    }

    async componentDidMount() {
      let search = "";
      if (this.props.match.params.query != null) {
          search = this.props.match.params.query;
      }  else if (name != null) {
          search = name;
      }
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: `{"search_term": "${search}","offset": 0,"limit": 100}`
      };
      const response = await fetch('https://api.figpinvault.com/api/v1/newsfeed?type=stories&offset=0&limit=10')
      const data = await response.json();       
      this.setState({ pins: data["results"] })        
    }

      render() {
        
        return (
           <div className="container">
                <br/>

            {this.state.pins.map((pin) => (
              <div className="unlock-row">
                    <div className="unlock-first-column">
                    <img className="unlock-image" src={pin.serial.figpin.img_cutout_url}/>
                    </div>
                    <div className="unlock-second-column">
<div className="five-columns">
<div className="column-item unlock-user"><img width="25" src="/user-icon.png"/>&nbsp;&nbsp;{(pin.serial.user.username == null) ? "Anonymous" : pin.serial.user.username} <span className="green-score">({pin.serial.user.collector_score.current_balance})</span></div>
<div className="blue-box"><img width="18" src="/collection-power-icon.png"/> &nbsp;&nbsp;&nbsp;{pin.serial.user.collection_power.current_balance}</div>
</div>
<div className="five-columns">

<div className="column-item unlock-user">
&nbsp;&nbsp;<img width="20" src={"/" + pin.story_action_type.name + ".png"}/>&nbsp;&nbsp;<Link to={"/pinDetail/"+pin.serial.figpin.number}>{pin.serial.figpin.name} ({pin.serial.figpin.number})</Link> - {pin.serial.edition} Ed. Lot {pin.serial.lot}</div>
<div className="blue-box"><img width="12" src="/figpin-power-icon.png"/> &nbsp;&nbsp;&nbsp;&nbsp;{pin.serial.power.current_balance}</div>
</div>

<div className="five-columns">
<div className="column-item"><b>{pin.serial.sequence_no}</b><br/>of<br/><b>{pin.serial.volume}</b></div>
<div className="column-item"><b>{pin.serial.unlock_position}</b><br/>Unlock<br/>Position</div>
<div className="column-item"><b>{pin.serial.boosts.length}</b><br/>Boost<br/>Count</div>
<div className="column-item"><b>{pin.serial.power.factory_score}</b><br/>Factory<br/>Score</div>
<div className="column-item"><b>{pin.serial.power.story_points_total}</b><br/>Story<br/>Score</div>
</div>

                </div>

              </div>
            ))}
         
           </div>
            
        );

      }

}
export default UnlocksSubset;