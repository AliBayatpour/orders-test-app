import React, { HTMLInputTypeAttribute } from "react";
import { StringNumber } from "../../types/shared/stringNumber.type";

type Props = {
  value?: StringNumber;
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
};
const Input: React.FC<Props> = ({
  value,
  type,
  onChange,
  placeholder = "",
  label,
  errorMessage,
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={errorMessage ? "input-rose" : "input-sky"}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
