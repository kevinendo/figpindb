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
import Releases2022 from "./components/releases-2022";
import Releases2023 from "./components/releases-2023";
import Resources from "./components/resources";
import Sets from "./components/sets";
import AppBasics from "./components/app-breakdown";
import Events from "./components/events";
import Scoring from "./components/scoring";
import IGLinks from "./components/ig-links";
import Characters from "./components/characters";
import Arenas from "./components/arenas";
import GuideStarwars from "./components/guide-starwars";
import GuideOnepiece from "./components/guide-onepiece";
import './App.css'

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
          <Route exact path={["/2022"]} component={Releases2022} />    
          <Route exact path={["/2023"]} component={Releases2023} />      
          <Route exact path={["/resources"]} component={Resources} />      
          <Route exact path={["/sets"]} component={Sets} />      
          <Route exact path={["/app-breakdown"]} component={AppBasics} />     
          <Route exact path={["/events"]} component={Events} />      
          <Route exact path={["/scoring"]} component={Scoring} />      
          <Route exact path={["/iglinks"]} component={IGLinks} />     
          <Route exact path={["/characters"]} component={Characters} />      
          <Route exact path={["/arenas"]} component={Arenas} />      
          <Route exact path={["/guide/starwars"]} component={GuideStarwars} />      
          <Route exact path={["/guide/onepiece"]} component={GuideOnepiece} />      
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