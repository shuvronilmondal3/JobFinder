
import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  icon: LucideIcon;
  title: React.ReactNode;
  description?: string;
  timestamp: string;
  categoryColor?: string;
  className?: string;
}

export function ActivityItem({
  icon: Icon,
  title,
  description,
  timestamp,
  categoryColor,
  className,
}: ActivityItemProps) {
  return (
    <div className={cn("flex items-start gap-4 rounded-lg p-3", className)}>
      <div
        className={cn(
          "mt-1 flex h-8 w-8 items-center justify-center rounded-full",
          categoryColor ? categoryColor : "bg-secondary"
        )}
      >
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium leading-none">{title}</p>
          <div className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold">
            {timestamp}
          </div>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
