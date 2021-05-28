import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNav from "./components/global-nav";
import PinsList from "./components/pins-list";
import PinDetail from "./components/pin-detail";
import PinsListSubset from "./components/pins-list-subset";
import About from "./components/about";
import Unlocks from "./components/unlocks";
import { Helmet } from 'react-helmet';

function App() {

  return (
    <div>
      <GlobalNav/>
      <div>
        <Switch>
          <Route exact path={["/unlocks"]} component={Unlocks} />      
          <Route exact path={["/"]} component={PinsList} />      
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
        </Switch>
      </div>
      <About/>
    </div>
  );
}

export default App;