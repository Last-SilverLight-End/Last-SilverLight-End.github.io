import type { Experience } from "@/types/portfolio";
import { formatPeriod, formatDuration } from "@/lib/format";
import TechBadge from "./TechBadge";
import TaskCard from "./TaskCard";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const period = formatPeriod(experience.period);
  const duration = formatDuration(experience.period);

  return (
    <div
      className="rounded-2xl p-6 sm:p-8 transition-shadow duration-200 hover:shadow-lg"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* 회사 정보 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-text)" }}
          >
            {experience.company}
          </h3>
          <p
            className="text-sm mt-0.5"
            style={{ color: "var(--color-accent)" }}
          >
            {experience.role}
          </p>
        </div>
        <div
          className="text-sm text-right shrink-0"
          style={{ color: "var(--color-text-muted)" }}
        >
          <p>{period}</p>
          <p style={{ color: "var(--color-text-subtle)" }}>{duration}</p>
          {experience.location && (
            <p className="mt-0.5" style={{ color: "var(--color-text-subtle)" }}>
              {experience.location}
            </p>
          )}
        </div>
      </div>

      {/* 회사 설명 */}
      {experience.description && (
        <p
          className="text-sm mb-5 leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          {experience.description}
        </p>
      )}

      {/* 전체 기술 스택 */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {experience.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      {/* 담당 업무 목록 */}
      {experience.tasks.length > 0 && (
        <div>
          <h4
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--color-text-subtle)" }}
          >
            주요 업무
          </h4>
          <div className="flex flex-col gap-3">
            {experience.tasks.map((task, i) => (
              <TaskCard key={i} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
