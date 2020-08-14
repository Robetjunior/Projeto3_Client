import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../logo.png"

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  navfixed ">
      <Link className="navbar-brand" to="/">
       <img src={LogoImg}  alt="Logo"/> 
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto  justify-content-endlex-row-reverse w-75">
          <li className="nav-item ml-auto ">
            <Link className="nav-link nav-text-color hover-button" to="/">
              
              Home
            </Link>
          </li>
          <li className="nav-item ml-auto ">
            <Link className="nav-link nav-text-color hover-button" to="/about">
              
              Contato
            </Link>
          </li>
          {props.loggedInUser._id ? (
          <li className="nav-item ml-auto">
            <Link className="nav-link nav-text-color hover-button" to="/create/announcement">
              
              Criar
            </Link>
          </li>
          
          ) : null}
          {props.loggedInUser._id ? (
          <li className="nav-item ml-auto">
            <Link className="nav-link nav-text-color hover-button " to="/announcements">
             
              Campanhas
            </Link>
          </li>
          ) : null}
          {props.loggedInUser._id ? (
           <li className="nav-item ml-auto">
             
                <Link className=" nav-link  nav-text-color  hover-button no-underline" to="/ong/profile">
                

                  Perfil
                </Link>
             
              </li>
          ) : (
            <React.Fragment>
              <li className="nav-item ml-auto ">
                <Link className="nav-link nav-text-color hover-button" to="/login">
                  
                  Entrar
                </Link>
              </li>
              <li className="nav-item ml-auto nav-text-color">
                <Link className="nav-link nav-text-color hover-button" to="/signup">
                 
                  Cadastrar
                </Link>
              </li>
            </React.Fragment>
          )}

       
        {props.loggedInUser._id ? (
          <li className="nav-item ml-auto ">
          <Link className="nav-link nav-text-color hover-button " to="/logout">
           
            Sair
          </Link>
          </li>
        ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
