
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
        <main className={cn("flex-1 transition-all duration-300", isMobile ? "ml-0 mt-2" : "ml-0")}>
          <div className="flex items-center p-2">
            <SidebarTrigger className="mr-2" />
            <span className="text-lg font-semibold tracking-tight text-foreground">EcoSync Hub</span>
          </div>
          <div className="container py-4 px-2 md:px-6 max-w-7xl bg-background/80 rounded-lg shadow-lg">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
