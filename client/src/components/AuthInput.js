import React from 'react';

const AuthInput = ({ type, placeholder, value, onChange, name, label }) => {
  return (
    <label className="flex flex-col gap-1 text-black-200 text-sm">
      {label}
      <input
        className="p-3 rounded-xl bg-black-50 outline-none focus:bg-white ring-offset-1 focus:ring-2 focus:ring-accent-100 trans"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </label>
  );
};

export default AuthInput;
