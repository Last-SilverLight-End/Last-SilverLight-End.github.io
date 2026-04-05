import { getPortfolioData } from "@/lib/portfolio";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";

export default function HomePage() {
  const data = getPortfolioData();

  return (
    <>
      <HeroSection profile={data.profile} />
      <ExperienceSection experiences={data.experiences} />
      <SkillsSection skills={data.skills} />
      {data.projects && data.projects.length > 0 && (
        <ProjectsSection projects={data.projects} />
      )}
      {data.education && data.education.length > 0 && (
        <EducationSection education={data.education} />
      )}
    </>
  );
}
