import React from "react";
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/Homepage'
import Nav from './components/Nav'
import PizzaMaker from './components/PizzaMaker'
// import Confirmation from './components/Confirmation'
import Help from './components/Help'

const App = () => {
  return (
    <div className="container">     
      <Nav />

      <Switch>
        <Route path="/Pizza">
          <PizzaMaker />
        </Route>

        <Route path="/Help">
          <Help />
        </Route>

        <Route path="/">
          <Homepage/>
        </Route>

      </Switch>
    </div>
  );
};
export default App;
