import React from "react"


function Login(props) {


  if(props.isLogged){

    status="In"
  } else {

    status="Out"
  }


  return(

    <div>

      <h1>You are currently Logged {status}</h1>

    </div>
  )

}

export default Login 