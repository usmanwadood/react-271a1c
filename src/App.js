import React from "react";
import Conditional from "./Conditional"
import Login from "./Login"
import Button from "./Button"
import "./style.css";

class App extends React.Component  {

  constructor(){

    super()
    this.state={
      isLogged: false,
    }
    this.handleClick= this.handleClick.bind(this)
  }


  handleClick() {

    this.setState(prevState => {

      return{
        isLogged= !prevState.isLogged
      }
    })
  }

  render(){

    return(

      <div>
        <Login isLogged={this.state.isLogged}/>

        <button onClick={this.handleClick()}>Click {(isLogged)? "Out":"In"}</button>
      </div>
    )
  }

}

export default App 