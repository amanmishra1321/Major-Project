import React from "react";
import Home from "./Component/Home";
import Homepage from "./Component/Homepage";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import ForgotPassword from "./Component/ForgetPassword";
import PageNotFound from "./Component/PageNotFound";

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/homepage" component ={Homepage} />
      <Route exact path="/login" component ={Login} />
      <Route exact path="/signup" component ={Signup} />
      <Route path="/forgot-password" component ={ForgotPassword} />
      <Route component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
