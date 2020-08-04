import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import announcementApi from "../../apis/announcement";
import FormAnnouncement from "./FormAnnouncement";

function CreateAnnouncement() {
  const history = useHistory();

  const [announcement, setAnnouncement] = useState({
    title: "",
    description: "",
    imgPath: "",
    value: "",
  });

  async function handleSubmit(data) {
    try {
      const result = await announcementApi.post("/create", data);

      history.push("/profile");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="">
      <h1>Announcement</h1>
      <hr></hr>

      <FormAnnouncement
        handleSubmit={handleSubmit}
        setAnnouncement={setAnnouncement}
        announcement={announcement}
        buttonText="Create"
      />
      {/* <div className="d-flex justify-content-start m-2">
                <img 
                className="pictures"
                src={props.imgPath}
                alt={`This is the ${props.title} announcement`}
                />
            </div>
        
            <div>
                <strong>{props.title}</strong>
                <span className="d-block">{props.description}</span>
            </div> */}
    </div>
  );
}

export default CreateAnnouncement;
