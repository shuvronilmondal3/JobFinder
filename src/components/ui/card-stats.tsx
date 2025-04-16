
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardStatsProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
  valueClassName?: string;
  style?: React.CSSProperties;
}

export function CardStats({
  title,
  value,
  description,
  icon,
  trend,
  className,
  valueClassName,
}: CardStatsProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1 flex items-center gap-2">
          <span className={valueClassName}>{value}</span>
          {trend && (
            <span
              className={cn(
                "text-xs font-medium flex items-center",
                trend.positive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.positive ? "↑" : "↓"}
              {Math.abs(trend.value)}%
            </span>
          )}
        </div>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardContent>
    </Card>
  );
}
