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
            <p>{ann.title}</p>
            <p>{ann.description}</p>
            <p>{ann.imgPath}</p>
            <p>{ann.value}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default ListAnnouncement;
