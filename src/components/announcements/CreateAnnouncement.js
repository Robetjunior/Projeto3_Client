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
      /////////// VERIFICAR ATRIBUTO ONGID ESTA VINDO VAZIO ///////////////////////////
      const result = await announcementApi.post("/create", data);
      history.push("ong/profile");
      /////////// VERIFICAR ATRIBUTO ONGID ESTA VINDO VAZIO ///////////////////////////
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container-fluid form-body">
      

      <FormAnnouncement
        handleSubmit={handleSubmit}
        setAnnouncement={setAnnouncement}
        announcement={announcement}
        buttonText="Create"
      />
     
    </div>
  );
}

export default CreateAnnouncement;
