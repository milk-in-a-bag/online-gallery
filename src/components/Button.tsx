import { type ButtonHTMLAttributes, type ReactNode } from "react";
type ButtonVariant = "primary" | "secondary" | "ghost" | "white-outline";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
}
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-white border border-gold hover:bg-taupe hover:border-taupe active:scale-95",
  secondary:
    "bg-transparent text-gold border border-gold hover:bg-gold hover:text-white active:scale-95",
  ghost:
    "bg-transparent text-taupe border border-transparent hover:text-gold hover:border-b hover:border-gold rounded-none active:scale-95",
  "white-outline":
    "bg-transparent text-white border border-white hover:bg-white hover:text-charcoal active:scale-95",
};
const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm tracking-wide",
  md: "px-6 py-3 text-sm tracking-widest",
  lg: "px-8 py-4 text-base tracking-widest",
};
export function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-inter font-medium uppercase
        transition-all duration-300 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
