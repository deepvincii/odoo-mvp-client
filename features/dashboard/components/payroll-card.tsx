import { IconCalendarDue, IconCircleCheck, IconReceiptRupee } from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PayrollCard() {
  return (
    <Card className="col-span-full justify-between lg:col-span-3">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-lg font-semibold">September payroll</CardTitle>
          <CardDescription>Current pay run progress</CardDescription>
        </div>
        <div className="bg-rose-500/10 text-rose-600 grid size-10 place-items-center rounded-lg dark:text-rose-400">
          <IconReceiptRupee className="size-5" stroke={1.8} />
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <div className="mb-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-muted-foreground text-xs">Estimated gross pay</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">₹32,80,450</p>
            </div>
            <span className="text-sm font-medium">72%</span>
          </div>
          <div className="bg-muted h-2 overflow-hidden rounded-full">
            <div className="bg-primary h-full w-[72%] rounded-full" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="bg-muted/50 flex items-center gap-3 rounded-xl p-3">
            <IconCircleCheck className="size-5 text-emerald-600" stroke={1.8} />
            <div>
              <p className="text-muted-foreground text-xs">Validated</p>
              <p className="font-medium">178 employees</p>
            </div>
          </div>
          <div className="bg-muted/50 flex items-center gap-3 rounded-xl p-3">
            <IconCalendarDue className="size-5 text-amber-600" stroke={1.8} />
            <div>
              <p className="text-muted-foreground text-xs">Pay date</p>
              <p className="font-medium">30 September</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
