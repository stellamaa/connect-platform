import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-ink text-cream hover:bg-black",
  secondary: "border border-ink/20 bg-transparent text-ink hover:border-ink",
  cream: "bg-cream text-ink hover:bg-white",
  clay: "bg-ink text-cream hover:bg-black",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  quiet: "border border-white/40 bg-transparent text-cream hover:border-white",
} as const;

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
