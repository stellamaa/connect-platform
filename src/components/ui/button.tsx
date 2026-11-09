import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-moss text-paper hover:bg-moss-deep",
  secondary: "border border-ink/15 bg-transparent text-ink hover:border-ink/40",
  clay: "bg-clay text-paper hover:bg-clay/90",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  quiet: "border border-white/30 bg-transparent text-paper hover:border-white",
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
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay disabled:cursor-not-allowed disabled:opacity-50",
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
