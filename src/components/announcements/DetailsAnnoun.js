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
  }, [id]);

  return (
    <div className="  container-fluid mt-auto mr-auto mt-5 p-5 justify-content-center align-items-center form-body">
      <div className="row">
        <div className="col-sm-7 img-details">
  
          <img className="image-control-detail" src={announ.imgPath} alt="Announcement" />
        </div>
   
        <div className="col-sm-4 ">
        <h1 className="text-center"> {announ.title} </h1>
          <hr></hr>
           <h5>Meta : ${announ.value},00</h5>
      
          <p>
            <strong>Descrição: </strong>
            {announ.description}
          </p>
            
        </div>
    </div>
    <div className="col-sm-12"> 
    <div className="form__field d-flex justify-content-center align-items-center">
          <h4>Donate!</h4>
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${30}`}
          >
            $30
          </Link>

          <Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${50}`}
          >
            $50
          </Link>

          <Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${100}`}
          >
            $100
          </Link>
          <Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${0}`}
          >
            Other
          </Link>
        </div>
      </div>
      
      </div>
   
  );
};

export default DetailsAnnoun;

    
     
 