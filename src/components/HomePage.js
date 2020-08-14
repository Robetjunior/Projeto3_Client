import React   from "react";
import { Link } from "react-router-dom";
// import AboutUs from "./AboutUs"
import DonateImg from "../donateBox.jpg"
import Fade from "react-reveal/Fade"
import AboutImg from "../distribuition.jpg"
import BoxDonate from "../box.jpg"
import ConvertDonateImg from "../convertDonation.jpg"
import MoneyDonateImg from "../moneyDonate.jpg"

function HomePage() {
  return (
    <div className="container-fluid  ">
      <div className="row c4 w-100 " >
       <div className="c4 col-sm d-flex justify-content-center align-items-center ">
        <div className=" w-100  ml-4 ">
          <h1 className="text-center text-donate">Por que doar?</h1>
          
          <h4 className="text-donate pl-4"> No momento em que vivemos, muitas familias infelizmente perderam tudo que tinham e com apenas um clique podemos ajudar elas nessa hora.
          </h4> 
            <div className="d-flex justify-content-center align-items-center">
            <Link className=" btn-lg btn-primary button-new-model no-underline mt-4" to="/announcements">
              <h1 className="text-donate "> Ajude-os</h1>
            </Link>
            </div>
        </div>
        <img  className="donate-img" src={DonateImg} alt="Donate"/>

      </div>
      
        </div>
       
        <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm  c4">
           
              <Fade left> 
              
                <h1  className="text-center text-donate">Sobre</h1>
                <hr className=""></hr>
              
        
                <h5 className="text-donate ml-3">
                A DonMake é uma plataforma desenvolvida para ajudar ONGs na capitação de recursos para suas campanhas.
                 Em nossa plataforma as doações realizadas terão seu valor convertido para os itens que as campanhas necessitam, como : Alimentos, roupas, materiais basicos, etc.
                </h5>
                
                
              </Fade>
            </div>
            
            <div className="col-sm  ">
              <Fade right>
               
              
                <img className="about-img" src={AboutImg} alt="About"/> 
              
              </Fade>
            </div>
          </div>
          <div className="row c4">
            <div className="col-sm card-donate">
              <Fade top> 
            
               
                <div className="d-flex justify-content-center">
              <img className="img-rounded " src={MoneyDonateImg} alt=" Donate"/> 
              </div>         
              <h1  className="text-center text-donate">Valores</h1>
              <hr className=""></hr>
              <p className="text-donate-sm">Com apenas um clique você pode realizar sua doação.</p>
                
              </Fade>
            </div>
            <div className="col-sm card-donate">
              <Fade top> 
            
              <div className="d-flex justify-content-center">
              <img className="img-rounded " src={BoxDonate} alt=" DonateBox"/> 
              </div>
                <h1 className="text-center text-donate">Amor</h1>
              <hr className=""></hr>
              <p className="text-donate-sm">Doar é um gesto de amor ao próximo, saiba que muitas vidas serão mudadas com esse gesto.</p>

              </Fade>
            </div>
            <div className="col-sm card-donate ">
              <Fade top>
              
              <div className="d-flex justify-content-center">
              <img className="img-rounded " src={ConvertDonateImg} alt="Convert Donate"/> 
              </div>     

              <h1 className="text-center text-donate ">Obrigado</h1>          
              <hr className=""></hr>
               <p className="text-donate-sm">Todo valor arrecadado será utilizado para a compra necessária para as campanhas</p>        
              </Fade>
            </div>
          </div>
         
        </div>
      </div>
        
    </div>
  );
}

export default HomePage;
