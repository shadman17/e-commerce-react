import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';  

import HomePage from './homepage/homepage/homepage.component'

const HatsPage = () => {
  return (
    <div>
      <h1> Hats Page </h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component = {HomePage}/>
      <Route path='/hats' component = {HatsPage}/>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
