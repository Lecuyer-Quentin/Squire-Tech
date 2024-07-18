import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Tous les services de l'entreprise",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}