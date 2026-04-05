"use client";

import { useState } from "react";
import type { Project } from "@/types/portfolio";
import { formatPeriod } from "@/lib/format";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechBadge from "@/components/ui/TechBadge";
import ProjectModal from "@/components/ui/ProjectModal";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div style={{ backgroundColor: "var(--color-surface)" }}>
        <SectionWrapper id="projects" title="프로젝트">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <button
                key={project.name}
                onClick={() => setSelected(project)}
                className="text-left rounded-xl p-5 flex flex-col transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {project.name}
                  </h3>
                  {project.period && (
                    <span
                      className="text-xs shrink-0"
                      style={{ color: "var(--color-text-subtle)" }}
                    >
                      {formatPeriod(project.period)}
                    </span>
                  )}
                </div>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="accent" />
                  ))}
                </div>

                {/* 링크 미리보기 */}
                {project.links && (
                  <div
                    className="flex gap-3 text-xs mt-auto pt-3"
                    style={{
                      borderTop: "1px solid var(--color-border)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {project.links.github && <span>GitHub →</span>}
                    {project.links.demo && <span>Demo →</span>}
                    {project.media && (
                      <span style={{ color: "var(--color-text-subtle)" }}>
                        {project.media.src.includes("youtube")
                          ? "▶ 영상 있음"
                          : "🖼 이미지 있음"}
                      </span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* 모달 */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
