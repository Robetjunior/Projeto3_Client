
import React from "react";
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom";

import ImageTest from "../../donations.jpg"

function ListAnnouncement(props) {
  return (
    <div className="container-fluid">
    <div className="row d-flex justify-content-around ">
      {props.announList.map((ann, i) => {
        return (
       
         
          <div className="col-sm-5 m-4 bkg-color" key={i}>
              <Fade top>
              
              <div className="d-flex justify-content-center">
              <Link to={`/announcement/${ann._id}`}>
              <img src={ImageTest} alt="Announcement" />  
              </Link>
        
              </div>     

              <h1 className="text-center">{ann.title}</h1>          
               <hr></hr>
          
                      <p>{ann.description}</p>
                      <p>Value: $ {ann.value},00</p>
              </Fade>
            </div>
          
          
        );
      })}
    </div>
    </div>
  );
}

export default ListAnnouncement;
