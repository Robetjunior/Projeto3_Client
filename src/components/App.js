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
import AboutUs from "./AboutUs";

// import AnnouncementList from "./announcements/AnnouncementList"
import Search from "./announcements/Search";
import Announcement from "./announcements/Announcement";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  // const [announcementList, setAnnouncementList] = useState(AnnouncementList)

  // function filterAnnouncements(name) {
  //   if (!name) {
  //     return setAnnouncementList([...Announcement])
  //   }
  //   const filteredAnnouncements = announcementList.filter((Announcement) => {
  //     return Announcement.title.toLowerCase().includes(name.toLowerCase())
  //   })

  //   return setAnnouncementList([...filteredAnnouncements])
  // }

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

          <Route path="/announcement/create" component={Announcement} />
          {/* <Route path="/announcements" component={announcementList} /> */}
          <Route path="/announcements" component={Search} />

          <PrivateRoute
            path="/ong/profile"
            component={UserProfile}
            user={loggedInUser}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
