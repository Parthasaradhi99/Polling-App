import styled from "styled-components"

export const StyledInput = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 12px 0;
    display: inlineblock;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius : 30px;
    box-shadow : 0 0 10px rgba(0,0,0,0.15);
    font-family: 'Roboto', sans-serif;

  }

  .main{
    margin:auto
  }
  
  /* Set a style for all buttons */
  button {
    background-color: #f720c2;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    box-shadow : 0 0 10px rgba(0,0,0,0.15);
    border-radius:50px;
  }
  
  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }
  
  /* Extra style for the cancel button (red) */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  
  /* Center the avatar image inside this container */
  .imgcontainer {
    text-align: center;
    width:500px;
    margin:auto
  }
  
  /* Avatar image */
  img.avatar {
    width: 200px;
    border-radius: 50%;
    margin : auto;
  }
  
  /* Add padding to containers */
  .container {
    padding: 16px;
    width: 50%;
    margin:auto
  }
  
  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-top: 16px;
  }
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
`