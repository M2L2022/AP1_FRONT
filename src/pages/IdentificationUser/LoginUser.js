import LoginForm from "../../components/FormIdentification/LoginForm";
import React from "react";
import "./LoginUser.css";

function Login() {

  return (
    <div className="SignIn">
        <div className="bg_Login">
           <LoginForm /> 
        </div>
    </div>
  );
}

export default Login;
