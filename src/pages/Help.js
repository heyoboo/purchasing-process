import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Help = ({ history }) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <h1 className="title is-1">HELP page</h1>
      <p>
        This is page. This is page. This is page. This is page. This is page.
      </p>

      <div>
          <a>
            <button ClassName="button">
              <NavLink
                to="/"
                exact
              >
                Back
              </NavLink>
            </button>
          </a>
          <a>
            <button ClassName="button">
              <NavLink
                to="/SignIn/Hm"
                exact
              >
                Pay
              </NavLink>
            </button>
          </a>
      </div>


      {/* <div className="navbar-item">
        <div className="buttons">
          {!isAuth ? (
            <button className="button is-white" onClick={loginUser}>
              Log in
            </button>
          ) : (
            <button className="button is-black" onClick={logoutUser}>
              Log out
            </button>
          )}
        </div>
      </div> */}



    </div>
  );
};

export default Help;
