import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../assets/styles/App.css";
import Navbar from "./Navbar";

import HomePage from "./HomePage";

//SIGNUP/LOGIN/LOGOUT
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import PrivateRoute from "./auth/PrivateRoute";

//Announcement/ AnnouncementList/ Search
import AnnouncementList from "./announcements/AnnouncementList"
import Search from "./announcements/Search"
import announcement from "./announcements/Announcement"

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [announcementList, setAnnouncementList] = useState(announcement)
  
  function filterAnnouncements(name) {
    if (!name) {
      return setAnnouncementList([...announcement])
    }
    const filteredAnnouncements = announcementList.filter((announcement) => {
      return announcement.title.toLowerCase().includes(name.toLowerCase())
    })
    
    return setAnnouncementList([...filteredAnnouncements])
  }
  
  
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
          <Route path="/announcements" component={announcementList} />
          <div></div>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
