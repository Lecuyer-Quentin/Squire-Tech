import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Tous les projects de l'entreprise",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}