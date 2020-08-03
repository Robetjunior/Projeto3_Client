import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

import Navbar from "./Navbar";

//SIGNUP/LOGIN/LOGOUT
import Signup from "./auth/Signup";
import Logout from "./auth/Logout";
import PrivateRoute from "./auth/PrivateRoute";

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
          <Route
            path="/logout"
            render={() => <Logout setUser={setLoggedInUser} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
