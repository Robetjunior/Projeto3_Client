import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../assets/styles/App.css";
import Navbar from "./Navbar";

import HomePage from "./HomePage";

//SIGNUP/LOGIN/LOGOUT
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import UserProfile from "./auth/UserProfile";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} />
      <div className="container-fluid w75 mt-5">
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/signup" component={Signup} />

          <Route
            path="/login"
            render={() => (
              <Login user={loggedInUser} setUser={setLoggedInUser} />
            )}
          />

          <Route
            path="/logout"
            render={() => <Logout setUser={setLoggedInUser} />}
          />

          <PrivateRoute
            path="/userProfile"
            component={UserProfile}
            user={loggedInUser}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
