import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type NavItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: <BarChart3 className="h-5 w-5" />,
    href: "/",
  },
  {
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
    href: "/settings",
  },
];

export function Sidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile && (
        <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between p-4 bg-background border-b">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <span className="ml-2 text-lg font-semibold">EcoSync Hub</span>
          </div>
        </div>
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-full flex-col bg-sidebar py-4 text-sidebar-foreground transition-all duration-300",
          isMobile
            ? isOpen
              ? "w-64 translate-x-0"
              : "w-64 -translate-x-full"
            : "w-64",
          isMobile ? "pt-16" : ""
        )}
      >
        <div className="flex items-center justify-center py-6 px-4">
          <h1 className="text-lg font-bold">EcoSync Research Hub</h1>
        </div>

        <div className="flex flex-col flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={cn(
                "flex items-center px-4 py-2.5 rounded-md font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-foreground",
                item.color && location.pathname === item.href && item.color
              )}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="px-3 py-4">
          <div className="px-4 py-2 text-sm text-sidebar-foreground/60">
            <p>© 2025 EcoSync Hub</p>
          </div>
        </div>
      </aside>
    </>
  );
}
