import type { Metadata } from "next";
import { getPortfolioData } from "@/lib/portfolio";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const data = getPortfolioData();
  const { profile } = data;
  const description = profile.bio.replace(/\n/g, " ").slice(0, 160);
  return {
    title: `${profile.name} | ${profile.title}`,
    description,
    openGraph: {
      title: `${profile.name} | ${profile.title}`,
      description,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = getPortfolioData();
  const { profile } = data;

  return (
    <html lang="ko">
      <body>
        <Header name={profile.name} />
        <main>{children}</main>
        <Footer contact={profile.contact} name={profile.name} />
      </body>
    </html>
  );
}
