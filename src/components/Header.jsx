import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import logo from "../assets/img/Logo original RGB.jpg";
import "../styles/Header.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="container header">
      <div className="row align-items-center">
        <div className="mr-auto">
          <img src={logo} alt="" className="logo" />
        </div>
        <nav className={`align-items-end nav ${menu && `nav-active`}`}>
          <Route>
            <NavLink
              onClick={() => setMenu(false)}
              exact
              className="link-item"
              activeClassName="link-active"
              to="/">
              Home
            </NavLink>
            <NavLink
              onClick={() => setMenu(false)}
              className="link-item"
              activeClassName="link-active"
              to="/about">
              About us
            </NavLink>
          </Route>
        </nav>
        <div className="click-area" onClick={() => setMenu(!menu)}>
          <div className={`menu-button ${menu && `menu-button-active`}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
