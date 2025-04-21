
import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className={cn("flex-1 transition-all duration-300", isMobile ? "ml-0" : "ml-0")}>
          <header className="sticky top-0 z-10 flex items-center p-3 bg-background/80 backdrop-blur-sm border-b border-border">
            <SidebarTrigger className="mr-3" />
            <span className="text-xl font-semibold tracking-tight text-gradient">JobFinder</span>
          </header>
          <div className="container py-6 px-4 md:px-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
