import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Steps from "./components/Steps";
import Container from "./components/Container";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import SignIn from "./pages/Sign-in";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Nav /> */}
      <Steps />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Help">
            <Help />
          </Route>
          <Route path="/SignIn/:name">
            <SignIn />
          </Route>
          <Route path="/Profile/:name">
            <Profile />
          </Route>
        </Switch>
      </Container>
      
    </BrowserRouter>
  );
}

export default App;
