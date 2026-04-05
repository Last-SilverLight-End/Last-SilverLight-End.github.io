import type { ContactInfo } from "@/types/portfolio";

interface FooterProps {
  contact: ContactInfo;
  name: string;
}

export default function Footer({ contact, name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-8"
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-text-subtle)" }}>
          © {year} {name}
        </p>
        <div className="flex items-center gap-4">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="text-sm transition-colors duration-150 hover:underline"
              style={{ color: "var(--color-text-muted)" }}
            >
              {contact.email}
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-150 hover:underline"
              style={{ color: "var(--color-text-muted)" }}
            >
              GitHub
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-150 hover:underline"
              style={{ color: "var(--color-text-muted)" }}
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
