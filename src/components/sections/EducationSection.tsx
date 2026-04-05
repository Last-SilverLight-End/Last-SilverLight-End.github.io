import type { Education } from "@/types/portfolio";
import { formatPeriod } from "@/lib/format";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <SectionWrapper id="education" title="학력">
      <div className="flex flex-col gap-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl p-5 sm:p-6"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--color-text)" }}
                >
                  {edu.school}
                </h3>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {edu.degree} · {edu.major}
                </p>
              </div>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-subtle)" }}
              >
                {formatPeriod(edu.period)}
              </span>
            </div>
            {edu.description && (
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "var(--color-text-muted)" }}
              >
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
