import {
  IconCalendarPause,
  IconClockCheck,
  IconFileCertificate,
  IconUserPlus,
  IconUsers,
  IconWallet,
} from "@tabler/icons-react";

export const workforceStats = [
  {
    label: "Total employees",
    value: "248",
    context: "Across 8 departments",
    change: "+6.2%",
    icon: IconUsers,
    iconClassName: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    label: "Present today",
    value: "221",
    context: "89.1% attendance",
    change: "+2.4%",
    icon: IconClockCheck,
    iconClassName: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    label: "On leave",
    value: "14",
    context: "9 approved, 5 pending",
    change: "-1.8%",
    icon: IconCalendarPause,
    iconClassName: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    label: "New hires",
    value: "12",
    context: "This month",
    change: "+20%",
    icon: IconUserPlus,
    iconClassName: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    label: "Active contracts",
    value: "236",
    context: "4 expire this month",
    change: "+3.1%",
    icon: IconFileCertificate,
    iconClassName: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    label: "Payroll estimate",
    value: "₹32.8L",
    context: "September pay run",
    change: "+4.7%",
    icon: IconWallet,
    iconClassName: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
];

export const attendanceTrend = [
  { day: "Mon", value: 86 },
  { day: "Tue", value: 92 },
  { day: "Wed", value: 89 },
  { day: "Thu", value: 95 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 62 },
  { day: "Sun", value: 44 },
];

export const departmentHeadcount = [
  { name: "Engineering", count: 72, percentage: 100 },
  { name: "Operations", count: 48, percentage: 67 },
  { name: "Sales", count: 42, percentage: 58 },
  { name: "Finance", count: 31, percentage: 43 },
  { name: "People", count: 22, percentage: 31 },
];

export const recentActivity = [
  {
    person: "Aarav Mehta",
    initials: "AM",
    event: "Leave request approved",
    module: "Time off",
    time: "8 min ago",
    status: "Approved",
  },
  {
    person: "Meera Shah",
    initials: "MS",
    event: "Employment contract renewed",
    module: "Contracts",
    time: "24 min ago",
    status: "Completed",
  },
  {
    person: "Rohan Iyer",
    initials: "RI",
    event: "Attendance correction submitted",
    module: "Attendance",
    time: "1 hr ago",
    status: "Pending",
  },
  {
    person: "Diya Kapoor",
    initials: "DK",
    event: "Added to September pay run",
    module: "Payroll",
    time: "2 hrs ago",
    status: "Ready",
  },
];
