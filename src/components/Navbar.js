import React, { useState } from "react";


const Navbar = () => {
  
  
  var page = document.querySelector("#root");

  const showLang = () => {
    var lang = document.querySelector("#lang");
    lang.classList.add("visible");
  }  
  
  page.addEventListener("click", () => {
    var lang = document.querySelector("#lang");
    lang.classList.remove("visible");
  })


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
        <a onClick={showLang}>
          <span  className="flag"></span>
          <span  className="lang">EN</span>
          <span  className="arrow-down"></span>
        </a>
      </li>
      <li id="lang" className="choose-lang shadow">
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

export default Navbar;
