import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="contaienr-fluid w75 mt-5">
        <Switch>
          <div></div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
