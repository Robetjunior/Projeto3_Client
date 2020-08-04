import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ongApi from "../../apis/ong";

const UserProfile = (props) => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    imgProfile: "",
    description: "",
  });

  useEffect(() => {
    (async function sendProfile() {
      try {
        await ongApi.get("/profile");

        history.push("/userProfile");
      } catch (err) {
        console.error(err);
      }
    })();
  });

  return <div></div>;
};

export default UserProfile;
