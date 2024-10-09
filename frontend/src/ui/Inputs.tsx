import React, { forwardRef } from "react";
import clsx from "clsx";

type Props = {
  placeholder: string;
  className?: string;
  name: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputs = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, name, type, value, onChange }, ref) => {
    return (
      <input
        placeholder={placeholder}
        className={clsx(
          "py-3 px-5 rounded-md outline-none border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200 w-full text-black",
          className
        )}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        ref={ref} // ref'yi buraya ekliyoruz
      />
    );
  }
);
Inputs.displayName = "Inputs";
export default Inputs;
