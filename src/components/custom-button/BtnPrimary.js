import React from "react";
import "./btnStyle.scss";

export const BtnPrimary = ({ text }) => {
  return (
    <div>
      <button className="btn-primary">{text}</button>
    </div>
  );
};

export const BtnOutline = ({ text }) => {
  return (
    <div>
      <button className="btn-outline">{text}</button>
    </div>
  );
};
