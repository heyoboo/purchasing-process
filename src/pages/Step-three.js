import React from "react";
import { NavLink } from "react-router-dom";

const StepThree = () => (

  <>
  
  <div  className="step-container">
      <div  className="step">
        <span  className="step-circle step-1">1</span>
        <span  className="step-txt">My data</span>
      </div>
      <hr />
      <div  className="step">
        <span  className="step-circle step-1">2</span>
        <span  className="step-txt">Payment</span>
      </div>
    </div>

  <div className="content shadow">
    <div className="content-inner">
      <h1 className="mb-20">Order Created</h1>
      <p className="mb-20">Congratulations, your payment was successful.
Shortly a conrmation email will arrive to your inbox</p>
    </div>
  </div>

  </>

);

export default StepThree;
