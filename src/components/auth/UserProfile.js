import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ongApi from "../../apis/ong";
const UserProfile = (props) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  useEffect(() => {
    (async function sendProfile() {
      try {
        const response = await ongApi.get("/ong/profile");
        setUser(response.data[0]);
        console.log(response.data[0]);
        history.push("/ong/profile");
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address}</h3>
      <h3>Phone: {user.phone}</h3>
      <h3>Description: {user.description}</h3>
    </div>
  );
};
export default UserProfile;
