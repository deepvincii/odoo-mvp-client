import type { ComponentType } from "react";
import {
  IconBuildingCommunity,
  IconCalendarTime,
  IconChartHistogram,
  IconClockHour4,
  IconFileInvoice,
  IconFileText,
  IconReportAnalytics,
  IconSettings,
  IconShieldLock,
  IconUsersGroup,
  IconWallet,
} from "@tabler/icons-react";

type NavigationIcon = ComponentType<{
  className?: string;
  stroke?: number;
}>;

export type NavigationItem = {
  label: string;
  href: string;
  icon: NavigationIcon;
  iconClassName: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const appNavigation: NavigationGroup[] = [
  {
    label: "Dashboards",
    items: [
      {
        label: "Analytics",
        href: "/dashboards/analytics",
        icon: IconChartHistogram,
        iconClassName: "text-indigo-600 dark:text-indigo-400",
      },
    ],
  },
  {
    label: "Workforce",
    items: [
      {
        label: "Employees",
        href: "/employees",
        icon: IconUsersGroup,
        iconClassName: "text-blue-600 dark:text-blue-400",
      },
      {
        label: "Departments",
        href: "/departments",
        icon: IconBuildingCommunity,
        iconClassName: "text-cyan-600 dark:text-cyan-400",
      },
      {
        label: "Contracts",
        href: "/contracts",
        icon: IconFileText,
        iconClassName: "text-violet-600 dark:text-violet-400",
      },
    ],
  },
  {
    label: "Time & leave",
    items: [
      {
        label: "Attendance",
        href: "/attendance",
        icon: IconClockHour4,
        iconClassName: "text-emerald-600 dark:text-emerald-400",
      },
      {
        label: "Time off",
        href: "/time-off",
        icon: IconCalendarTime,
        iconClassName: "text-amber-600 dark:text-amber-400",
      },
    ],
  },
  {
    label: "Payroll",
    items: [
      {
        label: "Pay runs",
        href: "/payroll",
        icon: IconWallet,
        iconClassName: "text-rose-600 dark:text-rose-400",
      },
      {
        label: "Payslips",
        href: "/payslips",
        icon: IconFileInvoice,
        iconClassName: "text-pink-600 dark:text-pink-400",
      },
    ],
  },
  {
    label: "System",
    items: [
      {
        label: "Reports",
        href: "/reports",
        icon: IconReportAnalytics,
        iconClassName: "text-teal-600 dark:text-teal-400",
      },
      {
        label: "Users & roles",
        href: "/settings/users",
        icon: IconShieldLock,
        iconClassName: "text-slate-600 dark:text-slate-400",
      },
      {
        label: "Settings",
        href: "/settings",
        icon: IconSettings,
        iconClassName: "text-muted-foreground",
      },
    ],
  },
];
