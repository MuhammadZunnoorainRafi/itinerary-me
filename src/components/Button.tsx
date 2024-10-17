// components/Button.tsx
import React from 'react';

interface ButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  // type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  className,
  disabled = false
  // type = 'button'
}) => {
  return (
    <button
      // type={type}
      disabled={disabled}
      className={`bg-blue disabled:opacity-40 text-white font-medium text-[15px] py-2.5 px-6 rounded-full mt-2.5 ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
