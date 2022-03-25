import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from './components/Navbar';
import "./index.scss";

const App = () =>{
  return(
  <div className="App"> 
  <Navbar/>
  </div>
);
}

ReactDOM.render(<App />, document.getElementById("app"));
