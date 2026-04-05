"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { formatPeriod } from "@/lib/format";
import TechBadge from "./TechBadge";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/** YouTube URL에서 영상 ID를 추출합니다.
 * 지원 형식:
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   https://youtu.be/VIDEO_ID
 *   https://www.youtube.com/embed/VIDEO_ID
 */
function extractYouTubeId(src: string): string | null {
  const match = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function isYouTubeUrl(src: string): boolean {
  return src.includes("youtube.com") || src.includes("youtu.be");
}

function MediaBlock({ src, alt }: { src: string; alt?: string }) {
  if (isYouTubeUrl(src)) {
    const videoId = extractYouTubeId(src);
    if (!videoId) return null;
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 */ }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ aspectRatio: "16/9", backgroundColor: "var(--color-border)" }}
    >
      <Image
        src={src}
        alt={alt ?? "프로젝트 이미지"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 640px"
      />
    </div>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ESC 키로 닫기
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // 모달 열려있는 동안 body 스크롤 잠금
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    // 오버레이
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "oklch(0% 0 0 / 0.6)" }}
      onClick={onClose}
    >
      {/* 모달 본체 — 클릭 이벤트 버블링 차단 */}
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 pt-6 pb-4"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div>
            <h2
              className="text-xl font-bold leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {project.name}
            </h2>
            {project.period && (
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-subtle)" }}
              >
                {formatPeriod(project.period)}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150"
            style={{
              backgroundColor: "var(--color-border)",
              color: "var(--color-text-muted)",
            }}
            aria-label="모달 닫기"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 본문 */}
        <div className="px-6 pb-6 flex flex-col gap-5">
          {/* 미디어 */}
          {project.media && (
            <MediaBlock src={project.media.src} alt={project.media.alt} />
          )}

          {/* 구분선 */}
          <hr style={{ borderColor: "var(--color-border)" }} />

          {/* 설명 */}
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {project.description}
          </p>

          {/* 기술 스택 */}
          {project.technologies.length > 0 && (
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--color-text-subtle)" }}
              >
                사용 기술
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="accent" />
                ))}
              </div>
            </div>
          )}

          {/* 링크 버튼 */}
          {project.links && (project.links.github || project.links.demo || project.links.website) && (
            <>
              <hr style={{ borderColor: "var(--color-border)" }} />
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                    style={{
                      backgroundColor: "var(--color-border)",
                      color: "var(--color-text)",
                    }}
                  >
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo 보기
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                    }}
                  >
                    Website
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
