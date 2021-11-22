import React from "react";
import { CustomInput } from "../../components/custom-input/CustomInput";
import {
  BtnOutline,
  BtnPrimary,
} from "../../components/custom-button/BtnPrimary";

const Login = () => {
  const inputField = [
    {
      label: "Email",
      type: "text",
      name: "email",
    },
    { label: "Password", type: "password", name: "password" },
  ];

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Login Page</h3>
        <hr />
        <div className="input-fields">
          <form>
            {inputField.map((row, i) => (
              <CustomInput key={i} {...row} />
            ))}
            <div className="form-button">
              <BtnPrimary text="Login" />
            </div>
            <div className="link">
              <a href="/register"> Dont have an account? Sign up here!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
