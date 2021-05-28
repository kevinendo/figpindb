import React, { Component } from "react";

class Unlocks extends Component {
    state = {
        todos: []
    }
    componentDidMount() {
        fetch('https://api.figpinvault.com/api/v1/newsfeed')
        .then(res => res.json())
        .then((data) => {
          this.setState({ todos: data["results"] })
        })
        .catch(console.log)
      }
    

      render() {

        return (
           <div className="container">
                <br/>
            {this.state.todos.map((todo) => (
              <div class="unlock-row">
                    <div class="unlock-first-column">
                    <img width="100" src={todo.serial.figpin.img_cutout_url}/>
                    </div>
                    <div class="unlock-second-column">
<div class="unlock-header">
                <div class="unlock-header-name">{(todo.serial.user.username == null) ? "Anonymous" : todo.serial.user.username} | Collector Score: {todo.serial.user.collector_score.current_balance} | Collection Power: {todo.serial.user.collection_power.current_balance}</div>
</div>
<div class="unlock-header">
    <div class="unlock-header-name">{todo.serial.figpin.name} ({todo.serial.figpin.number}) | {todo.serial.edition} Edition Lot {todo.serial.lot} | FiGPiN Power: {todo.serial.power.current_balance}</div>
</div>

<div class="five-columns">
<div class="column-item">{todo.serial.sequence_no}<br/>of<br/>{todo.serial.volume}</div>
<div class="column-item">{todo.serial.unlock_position}th<br/>to<br/>Unlock</div>
<div class="column-item">{todo.serial.boosts.length}<br/>Boost<br/>Count</div>
<div class="column-item">{todo.serial.power.factory_score}<br/>Factory<br/>Score</div>
<div class="column-item">{todo.serial.power.story_points_total}<br/>Story<br/>Score</div>
</div>

                </div>

              </div>
            ))}
         
           </div>
            
        );

      }

}
export default Unlocks;