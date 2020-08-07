import React   from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs"
import DonateImg from "../donateBox.jpg"

function HomePage() {
  return (
    <div className="container-fluid card-donate">
      <div className="row c4 w-100 " >
       <div className="c4 col-sm d-flex justify-content-center align-items-center ">
        <div className=" w-100  ml-4 ">
          <h1 className="text-center text-donate">Por que é importante doar?</h1>
          
          <h4 className="text-donate"> No momento em que vivemos, muitas familias infelizmente perderam tudo que tinham e com apenas um clique podemos ajudar elas nessa hora.
          </h4> 
            <div className="d-flex justify-content-center align-items-center">
            <Link className="btn btn-lg btn-primary " to="/announcements">
              <h1 className="text-donate"> Ajude-os</h1>
            </Link>
            </div>
        </div>
      </div>
        <div className="">
        <div className="col-sm-8 ">
        <img  className="donate-img" src={DonateImg} alt="Donate"/>
        </div>
        </div>
        </div>
       
        <AboutUs/>
        
    </div>
  );
}

export default HomePage;
