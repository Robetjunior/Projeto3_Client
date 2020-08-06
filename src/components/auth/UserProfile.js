import React, { useState, useEffect } from "react";

import ongApi from "../../apis/ong";

import ListAnnProfile from "./ListAnnProfile";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    adId: [],
  });

  useEffect(() => {
    (async function sendProfile() {
      try {
        const response = await ongApi.get("/ong/profile");

        setUser({ ...response.data });
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>User: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {user.adId.map((annun, i) => {
        return (
          <div key={i}>
            <span>Title: {annun.title}</span>
          </div>
        );
      })}
    </div>
  );
};
export default UserProfile;
