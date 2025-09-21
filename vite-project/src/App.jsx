import React from "react";
import SzoTabla from "./Szavak.jsx";

import "./App.css"


export default class App extends React.Component{

  render(){
    return(
      <table className="table">
        <tbody>
          <SzoTabla/>
        </tbody>
      </table>
    )
  }
}