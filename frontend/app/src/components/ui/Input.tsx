import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}

const Input = ({ name, type, placeholder }: InputProps) => {
  return (
    <input
      className="border border-gray-300 rounder-md py-2 px-4 w-[400px] max-w-full block"
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
    />
  );
};
export default Input;
