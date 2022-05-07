import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ContentPage1 from "./component/ContentPage1";
import ContentPage2 from "./component/ContentPage2";
import ContentPage3 from "./component/ContenPage3";
import ContentPage404 from "./component/ContentPage404";
import Footer from "./component/Footer";
import "./custom.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ContentPage1} />
        <Route path="/page2" component={ContentPage2} />
        <Route path="/page3" component={ContentPage3} />
        <Route path="*" component={ContentPage404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
