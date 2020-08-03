import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Projeto 03
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
        <ul className="navbar-nav ml-auto  justify-content-endlex-row-reverse w-50">
          <li className="nav-item ml-auto">
            <Link className="nav-link " to="/">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              Home
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-info-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                <circle cx="8" cy="4.5" r="1" />
              </svg>
              About Us
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link " to="/">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-layout-text-window"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fillRule="evenodd"
                  d="M11 15V4h1v11h-1zm4.5-11H.5V3h15v1zM3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Services
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/login">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-headset"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a5 5 0 0 0-5 5v4.5H2V6a6 6 0 1 1 12 0v4.5h-1V6a5 5 0 0 0-5-5z"
                />
                <path d="M11 8a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zM5 8a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8z" />
                <path
                  fillRule="evenodd"
                  d="M13.5 8.5a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H8a.5.5 0 0 1 0-1h3.5A1.5 1.5 0 0 0 13 12V9a.5.5 0 0 1 .5-.5z"
                />
                <path d="M6.5 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1z" />
              </svg>
             Login
            </Link>
          </li>
          <li className="nav-item ml-auto">
            <Link className="nav-link" to="/signup">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fillRule="evenodd"
                  d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              Sign Up
            </Link>
          </li>
        </ul>
        {/* <span className="navbar-text mr-2"></span> */}
        {/* {props.loggedInUser ? props.loggedInUser.username : ""} */}
        {/* </span> */}
        {/* {props.loggedInUser._id ? (
        <Link className="text-light" to="/logout">
          Logout
        </Link>
      ) : null} */}
      </div>
    </nav>
  );
};

export default Navbar;
