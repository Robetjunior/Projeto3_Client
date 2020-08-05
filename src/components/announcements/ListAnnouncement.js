import React from "react";

import { Link } from "react-router-dom";

function ListAnnouncement(props) {
  return (
    <div>
      {props.announList.map((ann, i) => {
        return (
          <div key={i}>
            <div className="card container">
              <div className="col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
                <figure>
                  <div className="media"></div>
                  <figcaption>
                    <svg
                      viewBox="0 0 200 200"
                      version="1.1"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                          <rect
                            id="alpha"
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                          ></rect>
                          <text className="title" dx="50%" dy="2.5em">
                            {ann.title}
                          </text>
                        </mask>
                      </defs>
                      <rect
                        id="base"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                      ></rect>
                    </svg>
                    <div className="body">
                      <img src={ann.imgPath} alt="Announcement" />
                      <h2>{ann.title}</h2>
                      <p>{ann.description}</p>
                      <p>Value: ${ann.value},00</p>
                    </div>
                  </figcaption>
                  <Link to={`/announcement/${ann._id}`}></Link>
                </figure>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListAnnouncement;
