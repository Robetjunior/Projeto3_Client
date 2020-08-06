import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../assets/styles/App.css";

import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Footer from "./Footer"

//SIGNUP/LOGIN/LOGOUT
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import UserProfile from "./auth/UserProfile";
import ListAnnProfile from "./auth/ListAnnProfile";
import Transaction from "./Trasaction";
import PrivateRoute from "./auth/PrivateRoute";
import AboutUs from "./AboutUs";

//ANNOUNCEMENTS
import Search from "./announcements/Search";
import CreateAnnouncement from "./announcements/CreateAnnouncement";
import DetailsAnnoun from "./announcements/DetailsAnnoun";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <BrowserRouter>
      <Navbar loggedInUser={loggedInUser} />
      <div className="container-fluid body-form">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutUs} />

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

          <Route path="/create/announcement" component={CreateAnnouncement} />

          <Route path="/announcements" component={Search} />

          <PrivateRoute
            path="/ong/profile"
            component={UserProfile}
            user={loggedInUser}
          />
          <Route path="/" exact component={ListAnnProfile} />

          <Route path="/announcement/:id" component={DetailsAnnoun} />

          <Route path="/transaction/create/:AnunId" component={Transaction} />

          
          <Footer/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
