import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import announApi from "../../apis/announcement";

const DetailsAnnoun = () => {
  const [announ, setAnnoun] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async function sendAnnoun() {
      try {
        const response = await announApi.get(`/${id}`);
        setAnnoun(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      <h3>{announ.title}</h3>
      <h3>{announ.description}</h3>
      <a href={`/transaction/create/`}>Dez Reais</a>
    </div>
  );
};

export default DetailsAnnoun;
