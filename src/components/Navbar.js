import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Empresa mt boa
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home Page
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Pagina 1
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Pagina 2
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
