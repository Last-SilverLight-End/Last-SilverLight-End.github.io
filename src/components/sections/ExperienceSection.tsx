import type { Experience } from "@/types/portfolio";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ExperienceCard from "@/components/ui/ExperienceCard";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <div
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <SectionWrapper id="experience" title="경력">
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
