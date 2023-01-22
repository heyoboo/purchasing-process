import React from "react";

const Steps = () => {
  return (
    <div className="step-container">
      <div className="step">
        <span className="step-circle">1</span>
        <span className="step-txt">My data</span>
      </div>
      <hr />
      <div className="step">
        <span className="step-circle">2</span>
        <span className="step-txt">Payment</span>
      </div>
    </div>
  );
};

export default Steps;
