import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ongApi from "../../apis/ong";

import ListAnnProfile from "./ListAnnProfile";

const UserProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async function sendProfile() {
      try {
        const response = await ongApi.get("/ong/profile");

        setUser([response.data])

        history.push("/ong/profile");

      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

console.log(user)

  return (
    <div>
      <h1>User: {user.name}</h1>
      {user.map((annun, i) => {
        return (
          <div key={i}>
             <span>Title: {annun.title}</span>
          </div>
        )
      })}
    </div>
  );
};
export default UserProfile;
