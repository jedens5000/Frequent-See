import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
// import { Signup } from "./component/Form";
import injectContext from "./store/appContext";
// import { Footer } from "./component/footer";
import FormSignup from "./pages/FormSignup";
import { Login } from "./pages/Login";
import { StatusUpdate } from "./pages/StatusUpdate";
import { Main } from "./pages/main";
import Charts from "./pages/Charts";
import SMSForm from "./pages/SMSForm";
import Medications from "./pages/medications";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <FormSignup />
            </Route>
            <Route exact path="/statusupdate">
              <StatusUpdate />
            </Route>
            <Route exact path="/charts">
              <Charts />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/SMSForm">
              <SMSForm />
            </Route>
            <Route exact path="/medications">
              <Medications />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
