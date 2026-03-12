import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-[var(--navy-950)] text-white hover:bg-[var(--navy-800)] focus:ring-[var(--navy-500)]",
    secondary:
      "border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--surface-soft)] focus:ring-gray-200",
    ghost:
      "text-[var(--navy-500)] hover:text-[var(--navy-700)] underline-offset-4 hover:underline px-0 py-0",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}

