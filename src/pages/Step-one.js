import React from "react";
import { NavLink } from "react-router-dom";

const StepOne = () => (

  <>
  
  <div  className="step-container">
      <div  className="step">
        <span  className="step-circle">1</span>
        <span  className="step-txt">My data</span>
      </div>
      <hr />
      <div  className="step">
        <span  className="step-circle">2</span>
        <span  className="step-txt">Payment</span>
      </div>
    </div>

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
        <NavLink type="submit" className="button shadow" to="/step-2-payment" exact>
          <span>Continue</span>
          <span className="arrow-right"></span>
        </NavLink>
      </form>
    </div>
  </div>

  </>

);

export default StepOne;
