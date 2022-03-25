import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Footer from 'footer/Footer';
//import Navbar from 'header/Navbar';
import PhotoPage from 'content/PhotoPage'

const App = () => (
  <div className="container">
    
    <PhotoPage/>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
