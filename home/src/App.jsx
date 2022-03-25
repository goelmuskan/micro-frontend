import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from 'footer/Footer';
import Navbar from 'header/Navbar';
import PhotoPage from 'content/PhotoPage'
//import Navbar from "../../header/src/components/Navbar";

const App = () => (
  <div className="container">
    <Navbar/>
    <PhotoPage/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
