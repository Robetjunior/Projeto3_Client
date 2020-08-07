import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import ongApi from "../../apis/ong";

import '../../assets/styles/profile.css'

// import ListAnnProfile from "./ListAnnProfile";

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
      <div className="info-profile">
        <h1>Seja Bem-vindo: {user.name}</h1>
        <span><strong>Email: </strong>{user.email}</span><br></br>
        <span><strong>Phone: </strong>{user.phone}</span><br></br>
        <span><strong>Endereço: </strong>{user.address}</span>
      </div>
      <h1 className="title-campanhas">Suas campanhas: </h1>
      {user.adId.map((annun, i) => {
        return (
          <div key={i} className="card">
            <div>
               <img src={annun.imgPath} className="img" alt="Announcement" />
            </div>
            <div className="card-body">
             <h1 classNAme="card-title">{annun.title}</h1>
              <span className="card-text"><strong>Valor: $</strong>{annun.value},00</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserProfile;
