import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './App.css'
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>  
      <div className="App">
        <Sidebar />
      </div>
      <Switch>
        <Route exact path='/Main' component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;
