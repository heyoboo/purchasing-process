import React from "react";
import { NavLink } from "react-router-dom";
import "./step-two.scss"

const StepTwo = () => (
  <>
    <div className="content shadow">
      <div className="content-inner">
        <h1 className="mb-20">Payemnt</h1>
        <p className="mb-20">After making the payment you will receive a conrmation email with details of your purchase
        </p>

        <div className="card-container">
          <div className="card"></div>
          <p>
            You will be redirected to a secure payment platform. This is a
            secure process. The validation of your payment can take up to
            24 hours.
          </p>
          <div className="master-card"></div>
          <div className="visa-card"></div>
        </div>
        <form>
          <NavLink className="step-2-button button-left shadow" to="/my-data" exact>
            <span>Back</span>
            <span className="arrow-left"></span>
          </NavLink>
          <NavLink className="step-2-button shadow" to="/confirmation" exact>
            <span>Pay</span>
            <span className="step-2-arrow-right"></span>
          </NavLink>
        </form>
      </div>
    </div>
  </>
);

export default StepTwo;
