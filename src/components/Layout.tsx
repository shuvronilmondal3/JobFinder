
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className={cn(
        "flex-1 transition-all duration-300", 
        isMobile ? "ml-0 mt-16" : "ml-64"
      )}>
        <div className="container py-6 px-4 md:px-6 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
