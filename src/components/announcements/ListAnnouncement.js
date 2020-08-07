import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";



function ListAnnouncement(props) {
  return (
    <div className="container-fluid">
    <div className="profile-announcements">
      <h1 >Campaings</h1>
      </div>
      <div className="row d-flex justify-content-around ">
        {props.announList.map((ann, i) => {
          return (
            <div className="col-sm-5 m-4 c4  cardss" key={i}>
              <Fade top>
              
                <div className="d-flex justify-content-center ">
                  <Link to={`/announcement/${ann._id}`}>
                    <img className="image-size-control" src={ann.imgPath} alt="Announcement" />
                  </Link>
                </div>
                <div className="card-title mt-1">
                <h1 className="text-center text-donate">{ann.title}</h1>
                <hr></hr>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListAnnouncement;
