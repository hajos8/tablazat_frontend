import React from "react";
import TableDataComponent from "./TableDataComponent.jsx";

import "./App.css"
import SzamTabla from "./szamok.jsx";


export default class App extends React.Component{
  
  render(){
    return(
      <table className="table">
        <tbody>
          <SzamTabla/>
        </tbody>
      </table>
    )
  }
}