import React from "react";

export default class TableDataComponent extends React.Component{
    render(){
        return(
            <td key={this.props.key}>
                {this.props.data}
            </td>
        )
    }
}