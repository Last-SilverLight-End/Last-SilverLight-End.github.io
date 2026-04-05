import type { SkillCategory } from "@/types/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechBadge from "@/components/ui/TechBadge";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionWrapper id="skills" title="기술 스택">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="rounded-xl p-5"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h3
              className="text-sm font-semibold mb-3"
              style={{ color: "var(--color-text)" }}
            >
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <TechBadge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
