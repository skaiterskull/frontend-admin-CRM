import React, { useState } from "react";
import { toast } from "react-toastify";
import { BtnOutline } from "../../components/custom-button/BtnPrimary";
import { CustomInput } from "../../components/custom-input/CustomInput";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const inputField = [
    { label: "First Name", type: "text", name: "fName", required: true },
    { label: "Last Name", type: "text", name: "lName", required: true },
    {
      label: "Email",
      type: "text",
      name: "email",
    },
    {
      label: "Phone",
      type: "text",
      name: "phone",
    },
    { label: "Password", type: "password", name: "password" },
    { label: "Confirm Password", type: "password", name: "confirmPassword" },
  ];

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Register Page</h3>
        <hr />
        <div className="input-fields">
          <form onSubmit={handleOnSubmit}>
            {inputField.map((row, i) => (
              <CustomInput key={i} {...row} onChange={handleOnChange} />
            ))}
            <div className="form-button">
              <BtnOutline text="Register" />
            </div>
            <div className="link">
              <a href="/">Already have an account? Login here!!!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
