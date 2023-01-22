import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import StepSection from "./components/StepSection";

import StepOne from "./pages/Step-one";
import StepTwo from "./pages/Step-two";
import StepThree from "./pages/Step-three";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <StepSection />
      <Container>
        <Switch>
          <Redirect exact from="/" to="my-data" />
          <Route path="/my-data">
            <StepOne />
          </Route>
          <Route path="/payment">
            <StepTwo />
          </Route>
          <Route path="/confirmation">
            <StepThree />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
