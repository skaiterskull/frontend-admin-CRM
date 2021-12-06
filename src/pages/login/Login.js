import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { BtnPrimary } from "../../components/custom-button/BtnPrimary";
import { adminLogin } from "../profile/adminUser.Action";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "hendra@yahoo.com",
  password: "123456",
};

const Login = () => {
  const [loginInfo, setLoginInfo] = useState(initialState);

  const dispatch = useDispatch();

  const { isAuth, isLoading } = useSelector((state) => state.admin);

  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate("/dashboard");
  }, [isAuth]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(loginInfo));
  };

  const inputField = [
    {
      label: "Email",
      type: "text",
      name: "email",
      value: loginInfo.email,
      required: true,
      onChange: handleOnChange,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: loginInfo.password,
      required: true,
      onChange: handleOnChange,
    },
  ];

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Login Page</h3>
        <hr />
        <div className="input-fields">
          {isLoading && "Loading..."}
          <form onSubmit={handleOnSubmit}>
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
