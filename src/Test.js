import React from "react";
class Test extends React.Component{
    render(){
        return(
            <div>
      <center> <h1>Hello {this.props.name} {this.props.age} </h1></center>
    </div>
        )
}}
export default Test;