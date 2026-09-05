import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { verifySession } from "@/features/auth/session";

export default async function AuthenticatedLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const user = await verifySession();

  return <AppShell user={user}>{children}</AppShell>;
}
