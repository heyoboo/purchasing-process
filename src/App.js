import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Steps from "./components/Steps";
import Container from "./components/Container";

import StepOne from "./pages/Step-one";
import StepTwo from "./pages/Step-two";
import StepThree from "./pages/Step-three";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Redirect exact from="/" to="step-1-my-data" />

          <Route path="/step-1-my-data">
            <StepOne />
          </Route>
          <Route path="/step-2-payment">
            <StepTwo />
          </Route>
          <Route path="/step-3-order-confirmation">
            <StepThree />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
