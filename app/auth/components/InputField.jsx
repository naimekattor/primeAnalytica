import React from "react";

const InputField = ({ id, label, type = "text", placeholder, icon }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          required
          className={`appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm ${
            icon ? "pl-10" : ""
          }`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;
