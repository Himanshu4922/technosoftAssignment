import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showPasswordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="w-full relative">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-3 py-3 border-b-2 bg-gray-50 focus:bg-white focus:outline-none transition duration-200 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-teal-500"
          }`}
        />
        {showPasswordToggle && type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition duration-200"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p className="absolute text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default InputField;
