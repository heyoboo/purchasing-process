import React from "react";
import "./nav.scss"

const Navbar = () => {
  let page = document.querySelector("#root");

  page.addEventListener("click", () => {
    let lang = document.querySelector("#lang");
    lang.classList.remove("visible");
  })

  const showLang = () => {
    let lang = document.querySelector("#lang");
    lang.classList.add("visible");
  }



  return (
    <nav>
      <ul>
        <li>
          <button>
            <span className="question"></span>
            <span>HELP</span>
          </button>
        </li>
        <li>
          <button>
            <span className="sign-in"></span>
            <span>SIGN IN</span>
          </button>
        </li>
        <li>
          <button onClick={showLang}>
            <span className="flag"></span>
            <span className="lang">EN</span>
            <span className="arrow-down"></span>
          </button>
        </li>
        <li id="lang" className="choose-lang shadow">
          <button>
            <span>EN</span>
            <span className="arrow-down"></span>
          </button>
          <button>
            <span>CN</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
