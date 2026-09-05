import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { recentActivity } from "@/features/dashboard/analytics-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Approved: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Completed: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Ready: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

export function RecentActivityCard() {
  return (
    <Card className="col-span-full gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle className="text-lg font-semibold">Recent employee activity</CardTitle>
        <CardDescription>Latest actions across HR and payroll</CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto px-0">
        <table className="w-full min-w-[720px] text-left">
          <thead className="text-muted-foreground bg-muted/40 text-xs">
            <tr>
              <th className="px-4 py-3 font-medium">Employee</th>
              <th className="px-4 py-3 font-medium">Activity</th>
              <th className="px-4 py-3 font-medium">Module</th>
              <th className="px-4 py-3 font-medium">When</th>
              <th className="px-4 py-3 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {recentActivity.map((activity) => (
              <tr key={`${activity.person}-${activity.event}`} className="hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-muted grid size-8 place-items-center rounded-full text-xs font-semibold">
                      {activity.initials}
                    </span>
                    <span className="font-medium">{activity.person}</span>
                  </div>
                </td>
                <td className="px-4 py-3">{activity.event}</td>
                <td className="text-muted-foreground px-4 py-3">{activity.module}</td>
                <td className="text-muted-foreground px-4 py-3">{activity.time}</td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={cn(
                      "inline-flex rounded-md px-2 py-1 text-xs font-medium",
                      statusStyles[activity.status],
                    )}
                  >
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
