import React, {Component} from "react";
import Fade from "react-reveal/Fade"
// import ThanksImg from "../donates.jpg"
import AboutImg from "../distribuition.jpg"
import BoxDonate from "../box.jpg"
import ConvertDonateImg from "../convertDonation.jpg"
import MoneyDonateImg from "../moneyDonate.jpg"


class AboutUs extends Component {
  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm c1">
              <Fade left> 
              <hr/>
                <h1  className="text-center">Campanhas</h1>
                <hr/>
              
        
                <h2>
                  Em nossa plataforma as doações realizadas terão seu valor convertido para os itens que as campanhas necessitam. Assim quando as campanhas alcançarem sua meta ou data final , o valor arrecadado  será convertido e redirecionado para as ONGS como : Alimentos, roupas, materiais basicos, etc.
                </h2>
                
                
              </Fade>
            </div>
            <div className="col-sm c2 ">
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
// function AboutUs() {
//   return (
//     <div>
    
//       <h1>About Us</h1>
//       <hr></hr>
//       <p>
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout. The point of
//         using Lorem Ipsum is that it has a more-or-less normal distribution of
//         letters, as opposed to using 'Content here, content here', making it
//         look like readable English.
//       </p>
//       <p>
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout. The point of
//         using Lorem Ipsum is that it has a more-or-less normal distribution of
//         letters, as opposed to using 'Content here, content here', making it
//         look like readable English.
//       </p>
//       <p>
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout. The point of
//         using Lorem Ipsum is that it has a more-or-less normal distribution of
//         letters, as opposed to using 'Content here, content here', making it
//         look like readable English.
//       </p>
//       <p>
//         It is a long established fact that a reader will be distracted by the
//         readable content of a page when looking at its layout. The point of
//         using Lorem Ipsum is that it has a more-or-less normal distribution of
//         letters, as opposed to using 'Content here, content here', making it
//         look like readable English.
//       </p>
      
//     </div>
//   );
// }

export default AboutUs;
