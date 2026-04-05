interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 ${className}`}
    >
      <h2
        className="text-2xl sm:text-3xl font-bold mb-12"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
