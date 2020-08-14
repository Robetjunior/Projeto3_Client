import React, {Component} from "react";

import Fade from "react-reveal/Fade"


//Colaborators
import Colaborator3 from "../colaborador3.jpg"
import Colaborator2 from "../colaborador2.png"
import Colaborator1 from "../Colaborador1.jpeg"


class AboutUs extends Component {
  render() {
    return(
      <div className="container-fluid d-flex justify-content-center align-items-center">
       
          <div> 
          <Fade left> 
    <div className="wrapper">
      <div className="container">
          <div className="profile  ml-5">
              <div className="meta "><img className="avatar mt-4 " src={Colaborator1} alt="imagem colaborador1"/>
                  <h2>José Roberto</h2>
                  <div className="position">Fullstack Web Developer</div>
                  <div className="social mb-4"><a href="https://github.com/Robetjunior"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/jos%C3%A9-roberto-981963bb/"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                  </div>
              </div>
              <div className="overlay"></div>
          </div>
          <div className="portfolio color-gradient3 
          ">
              <h1 >José Roberto</h1>
              <h5 className="pl-3">Me chamo Jose Roberto, tenho 23 anos, formado em engenharia da computação e especializado em Web Development na Ironhack e iniciando carreira profissional como dev. Amante de uma boa musica e sempre disposto a discutir algum problema teórico na companhia de um colega e uma boa cerveja.</h5>
              <ul className="skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              </ul>
          </div>
      </div>
  </div>      
</Fade>
  <Fade left> 
     <div className="wrapper mt-5 mb-5">
      <div className="container">
          <div className="profile ml-5">
              <div className="meta "><img className="avatar  mt-4" src={Colaborator2}  alt="imagem colaborador2" />
                  <h2>Erick Henrique</h2>
                  <div className="position">Fullstack Web Developer</div>
                  <div className="social mb-4"><a href="https://github.com/Erick-34"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/erick-henrique-b265431a0/"><i className="fa  fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                  </div>
              </div>
              <div className="overlay"></div>
          </div>
          <div className="portfolio color-gradient2 ">
              <h1 className="m-2">Erick Henrique</h1>
              <h5 className="pl-3">Me chamo Erick,tenho 19 anos,  sou Desenvolvedor recém formado na ironhack com às melhores tecnologias de desenvolvimento web. Um dos meus hobbies é ler livros e pescar, porém nas horas vagas gosto de fotografar a natureza e praticar esporte.</h5>
              <ul className="skills">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
                 </ul>
          </div>
        </div>
      </div>
      </Fade>
      <Fade left> 
      <div className="wrapper  mb-5">
      <div className="container">
          <div className="profile  ml-5">
              <div className="meta "><img className="avatar  mt-4 " src={Colaborator3}  alt="imagem colaborador3"/>
                  <h2>Eduardo S. Müller</h2>
                  <div className="position">Fullstack Web Developer</div>
                  <div className="social mb-4"><a href="https://github.com/EduardosMuller"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/eduardosm%C3%BCller/"><i className="fa  fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
                  </div>
              </div>
              <div className="overlay"></div>
          </div>
          <div className="portfolio color-gradient">
              <h1 className="m-2">Eduardo S. Müller</h1>
              <h5 className="pl-3">Me chamo Eduardo, tenho 29 anos, sou estudante de Análise e Desenvolvimento de Sistemas e especializado como Fullstack Web Development pela Ironhack. Tenho uma grande paixão por jogos, já realizando cursos de Game Design, Modelagem 3d e escultura e participando de 02 Global Game Jam e 02 Indie Speed Run.</h5>

              <div>
              <ul className="skills">
              <li>HTML5</li>
           <li>CSS3</li>
           <li>JavaScript ES6</li>
           <li>React</li>
           <li>NodeJS</li>
           <li>MongoDB</li>
           <li>SCRUM</li>
           <li>Bootstrap</li>
                 </ul>
                 </div>
          </div>
        </div>
      </div>
     

      </Fade>
       
    
 

 </div>

 </div>
     )
   }
}

export default AboutUs;



