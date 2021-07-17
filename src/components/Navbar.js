import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  const isAuth = !!localStorage.getItem("token");

  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/Am-I-A-User");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

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
        <a href="">
          <span  className="flag"></span>
          <span  className="lang">EN</span>
          <span  className="arrow-down"></span>
        </a>
      </li>
      <li  className="choose-lang shadow">
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
    


    // <nav
    //   className="navbar is-primary"
    //   role="navigation"
    //   aria-label="main navigation"
    // >
    //   <div className="container">
    //     <div className="navbar-brand">
    //       <a
    //         role="button"
    //         className={`navbar-burger burger ${isOpen && "is-active"}`}
    //         aria-label="menu"
    //         aria-expanded="false"
    //         onClick={() => setOpen(!isOpen)}
    //       >
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //       </a>
    //     </div>

    //     <div className={`navbar-menu ${isOpen && "is-active"}`}>
    //       <div className="navbar-end">
    //         <NavLink
    //           className="navbar-item"
    //           activeClassName="is-active"
    //           to="/"
    //           exact
    //         >
    //           Home
    //         </NavLink>

    //         <NavLink
    //           className="navbar-item"
    //           activeClassName="is-active"
    //           to="/Help"
    //         >
    //           HELP
    //         </NavLink>

    //         <NavLink
    //           className="navbar-item"
    //           activeClassName="is-active"
    //           to="/SignIn/Im-Not-A-User"
    //         >
    //           SIGN IN
    //         </NavLink>

    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default withRouter(Navbar);
