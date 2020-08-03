import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

import Navbar from "./Navbar";

//SIGNUP/LOGIN/LOGOUT
import Signup from "./auth/Signup";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="contaienr-fluid w75 mt-5">
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
