import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalNav from "./components/global-nav";
import PinsList from "./components/pins-list";
import PinDetail from "./components/pin-detail";
import PinsListSubset from "./components/pins-list-subset";
import About from "./components/about";
import WhereToBuy from "./components/where-buy";
import Home from "./components/home";
import Calendar from "./components/calendar";
import NewReleases from "./components/new-releases";
import Preorders from "./components/preorders";
import Releases2020 from "./components/releases-2020";
import Releases2021 from "./components/releases-2021";
import Resources from "./components/resources";
import Sets from "./components/sets";
import AppBasics from "./components/app-basics";


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
          <Route exact path={["/"]} component={Home} />   
          <Route exact path={["/pins"]} component={PinsList} />   
          <Route exact path={["/calendar"]} component={Calendar} />      
          <Route exact path={["/where"]} component={WhereToBuy} />      
          <Route exact path={["/new"]} component={NewReleases} />    
          <Route exact path={["/preorders"]} component={Preorders} />    
          <Route exact path={["/2020"]} component={Releases2020} />   
          <Route exact path={["/2021"]} component={Releases2021} />      
          <Route exact path={["/resources"]} component={Resources} />      
          <Route exact path={["/sets"]} component={Sets} />      
          <Route exact path={["/app-basics"]} component={AppBasics} />      
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