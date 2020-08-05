import React, { useState, useEffect } from "react";

// import announcementApi from "../../apis/announcement";

function ListAnnouncement(props) {
  // const [announcement, setAnnouncement] = useState([]);

  // useEffect(() => {
  //   (async function handleSubmit() {
  //     try {
  //       const response = await announcementApi.get("/");
  //       setAnnouncement([...response.data]);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   })();
  // }, []);

  return (
    
    <div>
     {props.announList.map((ann, i) => {
        return (
          <div key={i}>
            <div className="card container">
              <div className="col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
                <figure>
                  <div className="media" ></div>
                    <figcaption>
                      <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs><mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
                        <text className="title" dx="50%" dy="2.5em">{ann.title}</text>
                        </mask></defs><rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                      </svg>
                      <div className="body">
                      <h2>{ann.title}</h2>
                        <p>{ann.description}</p>
                        <p>{ann.imgPath}</p>
                        <p>{ann.value}</p>
                      </div>
                    </figcaption><a href="#"></a></figure>
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
}
{/* <div class="col-lg-6 col-md-6 hidden-sm hidden-xs">
    <figure>
        <div className="media" style="background-image:url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg)"></div>
        <figcaption><svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="mask" x="0" y="0" width="100%" height="100%"><rect id="alpha" x="0" y="0" width="100%" height="100%"></rect><text className="title" dx="50%" dy="2.5em">ENJOY</text><text className="title" dx="50%" dy="3.5em">EVERY</text><text className="title" dx="50%" dy="4.5em">MOMENT</text></mask></defs><rect id="base" x="0" y="0" width="100%" height="100%"></rect></svg>
            <div
                className="body">
                <p>Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone. Plaid skateboard man braid wayfarers.Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone. Plaid skateboard man braid wayfarers</p>
</div>
</figcaption><a href="#"></a></figure>
</div> */}


export default ListAnnouncement;
