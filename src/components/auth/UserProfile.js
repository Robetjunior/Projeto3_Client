import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
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
    <div className="row d-flex justify-content-around ">

      <div className="col-sm-3 info-profile profile-back">
        <h1 className="profile-title"> Bem-vindo {user.name}</h1>
        <span><strong>Email: </strong>{user.email}</span><br></br>
        <span><strong>Phone: </strong>{user.phone}</span><br></br>
        <span><strong>Endereço: </strong>{user.address}</span>
      </div>
      <div className="col-sm-8 scroll">
      
      <h1 className="profile-announcements">Suas campanhas: </h1>
      <div className=" shadow">
      {user.adId.map((annun, i) => {
        return (
         
          <div className="cardss " key={i} >  
          
            <div className=" d-flex justify-content-center">
               <img src={annun.imgPath} className="img image-control-profile" alt="Announcement" />
            </div>
            <div className="card-body">

             <h1 classNAme="card-title">{annun.title}</h1>
              <span className="card-text"><strong>Valor: $</strong>{annun.value},00</span>
              <Link className="an" to={`/announcement/${annun._id}`}>Ver Announcement</Link>

            </div>
            
         </div>
        
        );
      })}
      </div>
      </div>
    </div>
  );
};
export default UserProfile;
