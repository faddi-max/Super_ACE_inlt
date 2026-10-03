import type { ReactNode } from "react";
import { ScrollProgress } from "@/components/animation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-navy">
      <ScrollProgress />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
