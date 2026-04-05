"use client";

interface HeaderProps {
  name: string;
}

const NAV_LINKS = [
  { href: "#experience", label: "경력" },
  { href: "#skills", label: "기술" },
  { href: "#projects", label: "프로젝트" },
  { href: "#education", label: "학력" },
];

export default function Header({ name }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: "color-mix(in oklch, var(--color-bg) 85%, transparent)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold transition-opacity hover:opacity-70"
          style={{ color: "var(--color-text)" }}
        >
          {name}
        </a>
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm rounded-md transition-colors duration-150"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-text)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "var(--color-border)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-text-muted)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
