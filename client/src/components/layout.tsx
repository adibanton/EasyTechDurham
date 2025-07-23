import { ReactNode } from "react";
import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-sand">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
