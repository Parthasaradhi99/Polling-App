import React from 'react'
import { StyledInput } from "./Styles/Input.styled.js"

export default function Authentication() {  
  return (
    <StyledInput>
      <div className="Main">
      <div className="imgcontainer">
    <img src="./Images/Login.jpg" alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <button type="submit">Sign Up</button>
  </div>

  <div className="container">
    <span className="psw">Forgot <a href="/">password?</a></span>
  </div>
  </div>
    </StyledInput>
  )
}
