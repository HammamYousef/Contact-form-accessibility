import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  className?: string;
  errorMsg?: string;
  options?: string[];
  name?: string;
  children?: React.ReactNode;
}

const FormInput = ({
  label,
  type,
  className,
  errorMsg,
  options,
  name,
  children,
}: FormInputProps) => {
  const inputId = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={inputId} className="font-medium">
        {label} <span className="text-green-600">*</span>
      </label>

      {type === "radio" && options ? (
        <div className="flex flex-col gap-3.5">
          {options.map((option, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 border border-gray-400 rounded-lg py-3 px-6 cursor-pointer hover:bg-gray-50"
            >
              <input type="radio" name={name} value={option} className="size-4" required />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ) : children ? (
        children
      ) : (
        <input
          id={inputId}
          type={type}
          required
          className="border border-gray-400 rounded-lg h-12 p-3"
        />
      )}

      {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}
    </div>
  );
};

export default FormInput;
