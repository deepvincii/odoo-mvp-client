import type { Metadata } from "next";

import { AnalyticsDashboard } from "@/features/dashboard/components/analytics-dashboard";

export const metadata: Metadata = {
  title: "Workforce analytics | PeoplePay360",
  description: "People, attendance, leave and payroll analytics at a glance.",
};

export default function AnalyticsDashboardPage() {
  return <AnalyticsDashboard />;
}
