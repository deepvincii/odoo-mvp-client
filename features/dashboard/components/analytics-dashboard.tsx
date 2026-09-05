import { IconCalendar, IconDownload } from "@tabler/icons-react";

import { workforceStats } from "@/features/dashboard/analytics-data";
import { AttendanceMixCard } from "@/features/dashboard/components/attendance-mix-card";
import { AttendanceOverviewCard } from "@/features/dashboard/components/attendance-overview-card";
import { DepartmentCard } from "@/features/dashboard/components/department-card";
import { PayrollCard } from "@/features/dashboard/components/payroll-card";
import { RecentActivityCard } from "@/features/dashboard/components/recent-activity-card";
import { StatCard } from "@/features/dashboard/components/stat-card";

export function AnalyticsDashboard() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 pb-6 lg:px-6">
      <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Workforce analytics</h1>
          <p className="text-muted-foreground mt-0.5 text-sm">
            Monitor people operations, attendance and payroll readiness.
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="bg-background hover:bg-muted flex h-8 items-center gap-2 rounded-lg border px-2.5 text-sm font-medium transition-colors"
          >
            <IconCalendar className="size-4" stroke={1.8} />
            This month
          </button>
          <button
            type="button"
            className="bg-primary text-primary-foreground hover:bg-primary/80 flex h-8 items-center gap-2 rounded-lg px-2.5 text-sm font-medium transition-colors"
          >
            <IconDownload className="size-4" stroke={1.8} />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 lg:gap-6">
        {workforceStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
        <AttendanceOverviewCard />
        <AttendanceMixCard />
        <DepartmentCard />
        <PayrollCard />
        <RecentActivityCard />
      </div>
    </div>
  );
}
