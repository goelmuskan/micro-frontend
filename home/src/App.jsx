import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from 'footer/Footer';

const App = () => (
  <div className="container">
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
