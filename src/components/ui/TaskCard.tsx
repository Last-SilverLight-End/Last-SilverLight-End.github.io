import type { Task } from "@/types/portfolio";
import { formatPeriod } from "@/lib/format";
import TechBadge from "./TechBadge";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      className="rounded-xl p-5 transition-shadow duration-200"
      style={{
        backgroundColor: "var(--color-surface-elevated)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <h4
          className="text-sm font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          {task.subject}
        </h4>
        <div
          className="flex flex-wrap gap-2 text-xs shrink-0"
          style={{ color: "var(--color-text-subtle)" }}
        >
          <span>{formatPeriod(task.period)}</span>
          <span
            className="px-2 py-0.5 rounded-full text-xs"
            style={{
              backgroundColor: "var(--color-accent-subtle)",
              color: "var(--color-accent)",
            }}
          >
            {task.role}
          </span>
        </div>
      </div>
      <p
        className="text-sm leading-relaxed mb-4 whitespace-pre-line"
        style={{ color: "var(--color-text-muted)" }}
      >
        {task.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {task.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} variant="accent" />
        ))}
      </div>
    </div>
  );
}
