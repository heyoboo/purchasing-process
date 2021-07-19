import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {

  const showLang = () => {
    var lang = document.querySelector("#lang");
    lang.classList.add("visible");
  }

  const closeLang = () => {
    var lang = document.querySelector("#lang");
    lang.classList.remove("visible");
  }

  return (
  <nav>
    <ul>
      <li>
        <a href="">
          <span  className="question"></span>
          <span>HELP</span>
        </a>
      </li>
      <li>
        <a href="">
          <span  className="sign-in"></span>
          <span>SIGN IN</span>
        </a>
      </li>
      <li>
        <a onMouseDown={showLang}>
          <span  className="flag"></span>
          <span  className="lang">EN</span>
          <span  className="arrow-down"></span>
        </a>
      </li>
      <li id="lang" className="choose-lang shadow" onMouseLeave={closeLang}>
        <a href="">
          <span>EN</span>
          <span  className="arrow-down"></span>
          </a>
        <a href="">
          <span>CN</span>
        </a>
      </li>
    </ul>
  </nav>
  );
};

export default withRouter(Navbar);
