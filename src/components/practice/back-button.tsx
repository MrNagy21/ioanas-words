import type { ButtonHTMLAttributes } from "react";

export function BackButton({
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} type="button" className={`menu-back ${className}`}>
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m14 6-6 6 6 6" />
      </svg>
      <span>{children}</span>
    </button>
  );
}
