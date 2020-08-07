import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import '../../assets/styles/details.css'

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
    <div className="details">
      <div className="img-details">
          <img src={announ.imgPath} />
      </div>
      <div className="title">
        <h3>{announ.title}</h3> 
        <p><strong>Descrição: </strong>{announ.description}</p>
      </div>
        <h4>Donate!</h4>
      <Link
        className="btn"
        to={`/transaction/create/${id}?value=${30}`}
      >
        $30
      </Link>

      <Link
        className="btn"
        to={`/transaction/create/${id}?value=${50}`}
      >
        $50
      </Link>

      <Link
        className="btn"
        to={`/transaction/create/${id}?value=${100}`}
      >
        $100
      </Link>
      <div className="meta">
            <h5>Meta : ${announ.value},00</h5>
      </div>
    </div>
  );
};

export default DetailsAnnoun;
