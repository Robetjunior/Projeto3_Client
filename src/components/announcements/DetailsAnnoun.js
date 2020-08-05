import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

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
      <h3>Description: {announ.description}</h3>

      <Link
        className="btn btn-lg btn-primary"
        value={10}
        announ={announ}
        to={`/transaction/create/${id}`}
      >
        10
      </Link>

      <Link
        className="btn btn-lg btn-primary"
        value={10}
        announ={announ}
        to={`/transaction/create/${id}`}
      >
        15
      </Link>

      <Link
        className="btn btn-lg btn-primary"
        value={10}
        announ={announ}
        to={`/transaction/create/${id}`}
      >
        20
      </Link>
      {/* Mandar valor da doacao E ID do anuncio para transaction.js */}
      {/* <Link value={} */}
    </div>
  );
};

export default DetailsAnnoun;
