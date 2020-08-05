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
  }, [id]);

  return (
    <div>
      <h3>{announ.title}</h3>
      <p>Description: {announ.description}</p>
      <h5>Value total: ${announ.value},00</h5>
      <h4>Donate!</h4>
      <Link
        className="btn btn-lg btn-primary"
        to={`/transaction/create/${id}?value=${30}`}
      >
        $30
      </Link>

      <Link
        className="btn btn-lg btn-primary"
        to={`/transaction/create/${id}?value=${50}`}
      >
        $50
      </Link>

      <Link
        className="btn btn-lg btn-primary"
        to={`/transaction/create/${id}?value=${100}`}
      >
        $100
      </Link>
    </div>
  );
};

export default DetailsAnnoun;
