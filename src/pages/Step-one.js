import React from "react";
import { NavLink } from "react-router-dom";
import "./step-one.scss"

const StepOne = () => (
  <>
    <div className="content shadow">
      <div className="content-inner">
        <h1 className="mb-20">My Data</h1>
        <p className="mb-20">Please enter your data and press continue</p>
        <form>
          <label for="fname">Name <span className="require">*</span></label>
          <input id="fname" type="text" placeholder="John" required />
          <br />
          <label for="lname">Last Name <span className="require">*</span></label>
          <input id="lname" type="text" placeholder="Doe" required />
          <NavLink type="submit" className="btn shadow" to="/payment" exact>
            <span>Continue</span>
            <span className="arrow-right"></span>
          </NavLink>
        </form>
      </div>
    </div>
  </>
);

export default StepOne;
