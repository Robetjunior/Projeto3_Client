import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import announApi from "../../apis/announcement";

import {WhatsappShareButton} from "react-share";


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
    <div className="background_dark">
    <div className="card-detail">
    <div className="thumbnail"><img className="left image-control-profile" src={announ.imgPath} /></div>
    <div className="right">
        <h4 className="detail-h1">{announ.title}</h4>

       
          
	 
            <h5 className="detail-h3">Meta : R${announ.value},00 </h5>
     
        <div className="separator "></div>
        <div className="text-box"> <p className="detail-h5"> <strong>Sobre: </strong>
            {announ.description}</p></div>
       
    </div>
  
    <ul className="detail mt-4">
        <li><Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${30}`}
          >
            R$30
          </Link></li>
        <li><Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${50}`}
          >
            R$50
          </Link></li>
        <li><Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${100}`}
          >
            R$100
          </Link></li>
        <li><Link
            className="btn btn-lg btn-primary m-3"
            to={`/transaction/create/${id}?value=${0}`}
          >
            Outro
          </Link></li>
        <li>Compartilhe   <WhatsappShareButton className="ml-2 "	url='http://donmake.herokuapp.com/announcements'
									title='Let"s Donate'>
								
                <i className="fa fa-whatsapp  whats-icon p-2 fa-2x" aria-hidden="true"/>
                </WhatsappShareButton>	 </li>
    </ul>
   </div>
      
      </div>
   
  );
};

export default DetailsAnnoun;

    
     
 