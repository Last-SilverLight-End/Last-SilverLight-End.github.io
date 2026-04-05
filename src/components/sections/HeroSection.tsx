import Image from "next/image";
import type { Profile } from "@/types/portfolio";

interface HeroSectionProps {
  profile: Profile;
}

function ContactLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 hover:underline"
      style={{ color: "var(--color-accent)" }}
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default function HeroSection({ profile }: HeroSectionProps) {
  const { contact } = profile;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8 sm:gap-12">
        {/* 텍스트 영역 */}
        <div className="flex-1">
          <p
            className="text-sm font-medium mb-2"
            style={{ color: "var(--color-accent)" }}
          >
            {profile.title}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            {profile.name}
          </h1>
          {profile.location && (
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-text-subtle)" }}
            >
              📍 {profile.location}
            </p>
          )}
          <p
            className="text-base leading-relaxed mb-8 whitespace-pre-line max-w-xl"
            style={{ color: "var(--color-text-muted)" }}
          >
            {profile.bio}
          </p>

          {/* 연락처 링크 */}
          <div className="flex flex-wrap gap-4">
            {contact.email && (
              <ContactLink
                href={`mailto:${contact.email}`}
                label={contact.email}
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                }
              />
            )}
            {contact.github && (
              <ContactLink
                href={contact.github}
                label="GitHub"
                icon={
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                  </svg>
                }
              />
            )}
            {contact.linkedin && (
              <ContactLink
                href={contact.linkedin}
                label="LinkedIn"
                icon={
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                  </svg>
                }
              />
            )}
            {contact.blog && (
              <ContactLink
                href={contact.blog}
                label="Blog"
                icon={
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                }
              />
            )}
            {contact.resume && (
              <a
                href={contact.resume}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "white",
                }}
              >
                이력서 다운로드
              </a>
            )}
          </div>
        </div>

        {/* 아바타 */}
        <div className="shrink-0 self-center sm:self-auto">
          <div
            className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden"
            style={{ border: "3px solid var(--color-border)" }}
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
