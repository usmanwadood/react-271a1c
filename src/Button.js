import React from "react"


function Button(props) {

  function handleClick() {

    props.setState({

      isLogged: !props.isLogged
    })
  }


  (props.isLogged) ? status="Out": status="In"

  return(
    <div>
      <button onClick= {handleClick()}>Log {status}</button>
    </div>
  )

}

export default Button