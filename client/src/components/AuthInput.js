import React from 'react';

const AuthInput = ({ type, placeholder, value }) => {
  return (
    <input
      className="p-3 rounded-xl bg-black-50 outline-none focus:bg-white ring-offset-1 focus:ring-2 focus:ring-accent-100 trans"
      type={type}
      placeholder={placeholder}
      // value={value}
    />
  );
};

export default AuthInput;
