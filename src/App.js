import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './App.css'
import Main from "./components/Main/Main";
import Past from "./components/Lore/Past/Past";
import Now from "./components/Lore/Now/Now";
import Features from "./components/Features/Features";

function App() {
  return (
    <Router>  
      <div className="App">
        <Sidebar />
      </div>
      <Switch>
        <Route exact path='/Main' component={Main}/>
        <Route exact path='/past' component={Past} />
        <Route exact path='/now' component={Now} />
        <Route exact path='/features' component={Features} />
      </Switch>
    </Router>
  );
}

export default App;
