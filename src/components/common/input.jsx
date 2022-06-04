import React from "react";

const Input = ({ name, label, value, placeholder, onChange, autoFocus }) => {
  return (
    <div className="form-group my-2">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        name={name}
        className="form-control"
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
