import React, {Component} from "react";
import Fade from "react-reveal/Fade"
// import ThanksImg from "../donates.jpg"
import AboutImg from "../distribuition.jpg"
import BoxDonate from "../box.jpg"
import ConvertDonateImg from "../convertDonation.jpg"
import MoneyDonateImg from "../moneyDonate.jpg"

//Colaborators
// import Colaborator3 from "../colaborador3.jpg"
// import Colaborador2 from "../colaborador2.png"
// import Colaborador1 from "../Colaborador1.jpeg"


class AboutUs extends Component {
  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row testemos">
            <div className="col-sm  ">
           
              <Fade left> 
              
                <h1  className="text-center">Sobre</h1>
                <hr/>
              
        
                <h2>
                A DonMake é uma plataforma desenvolvida para ajudar ONGs na capitação de recursos para suas campanhas.
                  Em nossa plataforma as doações realizadas terão seu valor convertido para os itens que as campanhas necessitam, como : Alimentos, roupas, materiais basicos, etc.
                </h2>
                
                
              </Fade>
            </div>
            
            <div className="col-sm  ">
              <Fade right>
               
              
                <img className="about-img" src={AboutImg} alt="About"/> 
                <hr></hr>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="col-sm c3">
              <Fade top> 
            
               
                <div className="d-flex justify-content-center">
              <img className="img-rounded " src={MoneyDonateImg} alt=" Donate"/> 
              </div>         
              <h1  className="text-center">Valores</h1>
              <hr></hr>
              <p>Com apenas um clique você pode realizar sua doação.</p>
                
              </Fade>
            </div>
            <div className="col-sm c3 ">
              <Fade top> 
            
              <div className="d-flex justify-content-center">
              <img className="img-rounded " src={BoxDonate} alt=" DonateBox"/> 
              </div>
                <h1 className="text-center">Amor</h1>
              <hr></hr>
              <p>Doar é um gesto de amor ao próximo, saiba que muitas vidas serão mudadas com esse gesto.</p>

              </Fade>
            </div>
            <div className="col-sm c3">
              <Fade top>
              
              <div className="d-flex justify-content-center">
              <img className="img-rounded " src={ConvertDonateImg} alt="Convert Donate"/> 
              </div>     

              <h1 className="text-center">Obrigado</h1>          
               <hr></hr>
               <p>Todo valor arrecadado será utilizado para a compra necessária para as campanhas</p>        
              </Fade>
            </div>
          </div>
         
        </div>
      </div>
     )
   }
}

export default AboutUs;



// Adicionar ao final do projeto .


{/* <div className="col-sm c3 ">
              <Fade right> 
            
              <div className="d-flex justify-content-center">
              <img className="img-colaborator" src={Colaborator3 } alt=" Colaborator 03"/> 
              </div>
                <h1 className="text-center">Eduardo</h1>
              <hr></hr>

              <ul>
                <li>Estudante de Análise e Desenvolvimento de Sistemas</li>
                <li>Trabalhei por 10 anos na área de Eletrônica e Automação. </li>
                <li>Entrei nesse mundo de desenvolvimento e foi match na mesma hora.</li>
                <li>Gamer nas horas vagas</li>
                <li>Já fiz cursos para Game Design, escultura digital e manual.</li>
              </ul>
              

              </Fade>
            </div> */}

          //   <div className="row">
          //   <div className="col-sm c3">
          //     <Fade top> 
            
               
          //       <div className="d-flex justify-content-center">
          //     <img className="img-rounded " src={Colaborator1} alt="Colaborator"/> 
          //     </div>         
          //     <h1  className="text-center">José Roberto</h1>
          //     <hr></hr>
          //     <p></p>
                
          //     </Fade>
          //   </div>
           
          //   <div className="col-sm c3">
          //     <Fade top>
              
          //     <div className="d-flex justify-content-center">
          //     <img className="img-rounded " src={Colaborator2} alt="Colaborator"/> 
          //     </div>     

          //     <h1 className="text-center"></h1>          
          //      <hr></hr>
          //      <p>Todo valor arrecadado será utilizado para a compra necessária para as campanhas</p>        
          //     </Fade>
          //   </div>
          // </div>