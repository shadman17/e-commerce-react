import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./homepage/homepage/homepage.component";
import ShopPage from "./homepage/shop/shop.component";
import Header from "./components/header/header.component"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>

      {/*<HomePage />*/}
    </div>
  );
}

export default App;
