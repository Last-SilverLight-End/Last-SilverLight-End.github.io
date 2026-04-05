interface TechBadgeProps {
  label: string;
  variant?: "default" | "accent";
}

export default function TechBadge({
  label,
  variant = "default",
}: TechBadgeProps) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-tight";
  const variants = {
    default:
      "bg-[var(--color-border)] text-[var(--color-text-muted)]",
    accent:
      "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]",
  };
  return (
    <span className={`${base} ${variants[variant]}`}>{label}</span>
  );
}
