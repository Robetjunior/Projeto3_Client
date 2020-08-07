import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import announcementApi from "../../apis/announcement";
import FormAnnouncement from "./FormAnnouncement";

function CreateAnnouncement() {
  const history = useHistory();

  const [announcement, setAnnouncement] = useState({
    title: "",
    description: "",
    ImageUrl: "",
    value: "",
  });

  useEffect(() => {
    if (announcement.ImageUrl) {
      handleSubmit(announcement);
    }
  }, [announcement]);

  async function handleSubmit(data) {
    try {
      /////////// VERIFICAR ATRIBUTO ONGID ESTA VINDO VAZIO ///////////////////////////
      const result = await announcementApi.post("/create", data);
      history.push("/ong/profile");
      /////////// VERIFICAR ATRIBUTO ONGID ESTA VINDO VAZIO ///////////////////////////
    } catch (err) {
      console.error(err);
    }
  }

  async function handleFileUpload(data) {
    try {
      const uploadData = new FormData();

      uploadData.append("imgPath", data);

      const result = await announcementApi.post("/upload-image", uploadData);

      console.log(result.data.ImageUrl);

      // Retorna a URL do arquivo no Cloudinary
      return result.data.ImageUrl;

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
        handleFileUpload={handleFileUpload}
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
