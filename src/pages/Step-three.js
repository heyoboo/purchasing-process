import React from "react";
import { NavLink } from "react-router-dom";


var orderTitle, message;

fetch('https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f')
      .then(response => {
         return response.json();
      })
      .then(data => {
        orderTitle = JSON.stringify(data.title.en);
        message = JSON.stringify(data.message.en);
  })



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
      <h1 className="order-mb">{orderTitle.replace(/['"]+/g, '')}</h1>
        <div className= "card-container">
          <img src="./img/order.svg" className="card"/>
        </div>
      <p>{message.replace(/['"]+/g, '')}</p>
    </div>
  </div>

  </>



);



export default StepThree;
