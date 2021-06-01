import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNav from "./components/global-nav";
import PinsList from "./components/pins-list";
import PinDetail from "./components/pin-detail";
import PinsListSubset from "./components/pins-list-subset";
import About from "./components/about";
import UnlocksSubset from "./components/unlocks-subset";
import UnlocksStories from "./components/unlocks-stories";
import UnlocksFilter from "./components/unlocks-filter";

import Calendar from "./components/calendar";

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

function App() {

  return (
    <div>
      <GlobalNav/>
      <div>
        <Switch>
          <Route exact path={["/unlocks"]} component={UnlocksSubset} />     
          <Route exact path={["/unlocks-filter"]} component={UnlocksFilter} />     
          <Route 
            path="/unlocks/:query"
            render={(props) => (
              <UnlocksSubset {...props} />
            )}
          />            
          <Route exact path={["/"]} component={PinsList} />   
          <Route exact path={["/calendar"]} component={Calendar} />      
          <Route exact path={["/unlock-stories"]} component={UnlocksStories} />      
          <Route 
            path="/pinDetail/:number"
            render={(props) => (
              <PinDetail {...props} />
            )}
          />  
          <Route 
            path="/:by/:query"
            render={(props) => (
              <PinsListSubset {...props} />
            )}
          />       
          <Route component={NoMatchPage} />             
        </Switch>
      </div>
      <About/>
    </div>
  );
}

export default App;