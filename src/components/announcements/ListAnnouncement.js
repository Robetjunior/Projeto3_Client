
import React from "react";
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom";

function ListAnnouncement(props) {
  return (
    <div className="">
      {props.announList.map((ann, i) => {
        return (
          <div key={i}>
          <div className="row">
          <div className="col-sm c3 ">
              <Fade top>
              
              <div className="d-flex justify-content-center">
              <Link to={`/announcement/${ann._id}`}>
              <img src={ann.imgPath} alt="Announcement" />  
              </Link>
        
              </div>     

              <h1 className="text-center">{ann.title}</h1>          
               <hr></hr>
          
                      <p>{ann.description}</p>
                      <p>Value: ${ann.value},00</p>
              </Fade>
            </div>
          
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListAnnouncement;
