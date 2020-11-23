import React from "react";

import "./styles.css";
import Makanan from "./component/Makanan";

import Home from "./pages/Home";
import { Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <Makanan name="jeruk" price="5000" />
          <Link to="/">Home</Link>
        </Route>
      </Switch>
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TextHijau name="juni" color="merah" />
      <TextHijau name="juli" />
      <TextHijau name="agustus" />
      
      
      <Makanan name="kuaci" price="1500" />
      <Makanan name="nanas" price="2500" />
      <Makanan name="sirsak" price="3000" /> */}
    </div>
  );
}
