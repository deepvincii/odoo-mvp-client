import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const attendanceMix = [
  { label: "Present", value: 89, color: "bg-indigo-500" },
  { label: "On leave", value: 6, color: "bg-amber-500" },
  { label: "Absent", value: 5, color: "bg-rose-500" },
];

export function AttendanceMixCard() {
  return (
    <Card className="col-span-full xl:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Today&apos;s workforce</CardTitle>
        <CardDescription>Attendance distribution across all offices</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center justify-center gap-7 sm:flex-row xl:flex-col">
        <div
          className="relative grid size-44 shrink-0 place-items-center rounded-full"
          style={{
            background:
              "conic-gradient(#6366f1 0deg 320deg, #f59e0b 320deg 342deg, #f43f5e 342deg 360deg)",
          }}
        >
          <div className="bg-card grid size-28 place-items-center rounded-full text-center">
            <div>
              <p className="text-3xl font-semibold">89%</p>
              <p className="text-muted-foreground text-xs">Present</p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-3">
          {attendanceMix.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className={`size-2.5 rounded-full ${item.color}`} />
              <span className="text-muted-foreground flex-1 text-sm">{item.label}</span>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
