import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="contaienr-fluid w75 mt-5">
        <Switch>
          <div>
            <h1>INTERVALO</h1>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
