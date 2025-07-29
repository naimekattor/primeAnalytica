// src/components/InputField.jsx

import React from "react";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  isTextArea = false,
}) => {
  const commonProps = {
    id,
    name: id,
    placeholder,
    className:
      "mt-1 block w-full bg-white  border border-[#d4cfcf] rounded-md  py-3 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500",
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {isTextArea ? (
        <textarea {...commonProps} rows={5}></textarea>
      ) : (
        <input {...commonProps} type={type} />
      )}
    </div>
  );
};

export default InputField;
