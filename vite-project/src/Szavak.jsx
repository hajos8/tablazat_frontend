import React from "react";
import TableDataComponent from "./TableDataComponent.jsx";
import beszed from "./data.js"

export default class SzamTabla extends React.Component {
  constructor(props){
    super(props)

    const szavak = [];
    beszed.data.forEach(elem => {
      elem.split(" ").forEach(szo => {
        szavak.push(szo);
      });
    });

    const sorok = [];
    for (let i = 0; i < szavak.length; i += 5) {
      sorok.push(szavak.slice(i, i + 5));
    }

    this.state = {
      szavak,
      sorok,
    };


  }

  handleSorTorles = (e, index) => {
    e.preventDefault()

    this.setState(prevState => {
      const ujSorok = prevState.sorok.filter((_, i) => i != index);
      return { ...prevState, sorok: ujSorok };
    });
  }

  render(){
    return (
      <>
        {this.state.sorok.map((sor, sorIndex) => (
          <tr key={sorIndex}>
            {sor.map((szo, szoIndex) => (
              <TableDataComponent key={szoIndex} data={szo}></TableDataComponent>
            ))}
            <td>
              <button onClick={(e) => this.handleSorTorles(e, sorIndex)}>Törlés</button>
            </td>
          </tr>
        ))}
      </>
    );
  }

}