import type { ComponentType } from "react";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  context: string;
  change: string;
  icon: ComponentType<{ className?: string; stroke?: number }>;
  iconClassName: string;
};

export function StatCard({
  label,
  value,
  context,
  change,
  icon: Icon,
  iconClassName,
}: StatCardProps) {
  const positive = change.startsWith("+");

  return (
    <Card className="col-span-6 justify-between sm:col-span-3 xl:col-span-2 2xl:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div className={cn("grid size-10 place-items-center rounded-lg", iconClassName)}>
          <Icon className="size-5" stroke={1.8} />
        </div>
        <span
          className={cn(
            "flex items-center gap-0.5 rounded-md px-1.5 py-1 text-xs font-medium",
            positive
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-rose-500/10 text-rose-600 dark:text-rose-400",
          )}
        >
          {positive ? (
            <IconArrowUpRight className="size-3.5" stroke={2} />
          ) : (
            <IconArrowDownRight className="size-3.5" stroke={2} />
          )}
          {change}
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
        <p className="text-muted-foreground mt-2 text-xs">{context}</p>
      </CardContent>
    </Card>
  );
}
