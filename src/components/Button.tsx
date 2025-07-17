import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "fill",
      children,
      className = "",
      onClick = () => {},
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "rounded-full font-semibold py-2 px-5 shadow transition flex items-center gap-2 cursor-pointer";
    const fillClasses = "bg-[#6cb50a] text-white hover:bg-[#397d0c]";
    const outlineClasses =
      "bg-transparent border-2 border-[#6cb50a] text-[#6cb50a] hover:bg-[#397d0c] hover:text-white";
    const variantClasses = variant === "fill" ? fillClasses : outlineClasses;

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${className}`.trim()}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
