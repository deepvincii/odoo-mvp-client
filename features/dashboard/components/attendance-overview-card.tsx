import { IconClockCheck, IconUserCheck, IconUserExclamation } from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { attendanceTrend } from "@/features/dashboard/analytics-data";

export function AttendanceOverviewCard() {
  return (
    <Card className="col-span-full gap-5 xl:col-span-4">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-lg font-semibold">Attendance overview</CardTitle>
          <CardDescription>Daily attendance during the current week</CardDescription>
        </div>
        <span className="text-muted-foreground rounded-md border px-2 py-1 text-xs">
          Sep 1–7
        </span>
      </CardHeader>
      <CardContent className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="flex min-h-64 items-end gap-3 border-b px-1 pt-6 sm:gap-5">
          {attendanceTrend.map((item, index) => (
            <div key={item.day} className="flex h-56 min-w-0 flex-1 flex-col justify-end gap-2">
              <span className="text-center text-xs font-medium">{item.value}%</span>
              <div
                className={`mx-auto w-full max-w-9 rounded-t-lg ${
                  index === 3 ? "bg-primary" : "bg-primary/20"
                }`}
                style={{ height: `${item.value}%` }}
              />
              <span className="text-muted-foreground pb-2 text-center text-xs">
                {item.day}
              </span>
            </div>
          ))}
        </div>

        <div className="grid content-center gap-3">
          <div className="bg-muted/50 flex items-center gap-3 rounded-xl p-3">
            <div className="bg-emerald-500/10 text-emerald-600 grid size-9 place-items-center rounded-lg dark:text-emerald-400">
              <IconUserCheck className="size-5" stroke={1.8} />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">On time</p>
              <p className="text-lg font-semibold">204</p>
            </div>
          </div>
          <div className="bg-muted/50 flex items-center gap-3 rounded-xl p-3">
            <div className="bg-amber-500/10 text-amber-600 grid size-9 place-items-center rounded-lg dark:text-amber-400">
              <IconClockCheck className="size-5" stroke={1.8} />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Late arrivals</p>
              <p className="text-lg font-semibold">17</p>
            </div>
          </div>
          <div className="bg-muted/50 flex items-center gap-3 rounded-xl p-3">
            <div className="bg-rose-500/10 text-rose-600 grid size-9 place-items-center rounded-lg dark:text-rose-400">
              <IconUserExclamation className="size-5" stroke={1.8} />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Absent</p>
              <p className="text-lg font-semibold">13</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
