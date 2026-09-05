import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { departmentHeadcount } from "@/features/dashboard/analytics-data";

export function DepartmentCard() {
  return (
    <Card className="col-span-full lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Headcount by department</CardTitle>
        <CardDescription>Largest teams across the organisation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {departmentHeadcount.map((department) => (
          <div key={department.name}>
            <div className="mb-1.5 flex items-center justify-between gap-4 text-sm">
              <span>{department.name}</span>
              <span className="text-muted-foreground tabular-nums">
                {department.count}
              </span>
            </div>
            <div className="bg-muted h-2 overflow-hidden rounded-full">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: `${department.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
