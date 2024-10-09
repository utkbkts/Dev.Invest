import React from "react";
import clsx from "clsx";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  colors?: "success" | "error" | "warning" | "info" | "primary";
};

const Button = ({
  onClick,
  children,
  className,
  colors = "primary",
  disabled = false,
}: ButtonProps) => {
  const colorClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    error: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    info: "bg-teal-600 text-white hover:bg-teal-700",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "py-2 px-4 rounded-md transition-all duration-200",
        colorClasses[colors],
        {
          "opacity-50 cursor-not-allowed": disabled,
        },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
