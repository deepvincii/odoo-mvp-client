"use client";

import { useState, type ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";

type AppShellProps = {
  children: ReactNode;
  user: {
    email: string;
    role: string;
  };
};

export function AppShell({ children, user }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-sidebar flex h-svh w-full overflow-hidden">
      <AppSidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
        user={user}
      />
      <div className="bg-background flex min-w-0 flex-1 flex-col overflow-hidden md:rounded-tl-3xl md:border-t md:border-l">
        <AppHeader
          collapsed={collapsed}
          onDesktopToggle={() => setCollapsed((current) => !current)}
          onMobileOpen={() => setMobileOpen(true)}
        />
        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
