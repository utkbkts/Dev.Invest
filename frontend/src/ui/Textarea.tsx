import React from "react";

type TextareaProps = {
  placeholder: string;
  name: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, name, onChange, rows = 4 }, ref) => {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        rows={rows}
        onChange={onChange}
        ref={ref}
        className="py-3 px-5 rounded-md border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-200 w-full text-black"
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
