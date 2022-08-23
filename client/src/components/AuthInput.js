import React from 'react';

const AuthInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      className="p-3 rounded-xl bg-black-50 outline-none focus:bg-white ring-offset-1 focus:ring-2 focus:ring-accent-100 trans"
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
    />
  );
};

export default AuthInput;
