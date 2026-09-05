"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconSelector } from "@tabler/icons-react";

import { BrandMark } from "@/components/brand/brand-mark";
import { appNavigation } from "@/config/app-navigation";
import { cn } from "@/lib/utils";

type AppSidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onMobileClose: () => void;
  user: {
    email: string;
    role: string;
  };
};

function formatRole(role: string) {
  return role
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function AppSidebar({
  collapsed,
  mobileOpen,
  onMobileClose,
  user,
}: AppSidebarProps) {
  const pathname = usePathname();
  const initial = user.email.charAt(0).toUpperCase();

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] md:hidden"
          onClick={onMobileClose}
        />
      ) : null}

      <aside
        className={cn(
          "bg-sidebar text-sidebar-foreground fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 flex-col border-r transition-[transform,width] duration-200 md:relative md:z-auto md:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          collapsed && "md:w-[4.5rem]",
        )}
      >
        <div className="flex h-16 shrink-0 items-center border-b px-3">
          <div
            className={cn(
              "hover:bg-sidebar-accent flex min-w-0 flex-1 items-center gap-3 rounded-lg p-2 transition-colors",
              collapsed && "md:justify-center",
            )}
          >
            <BrandMark className="size-8 shrink-0" />
            <div className={cn("min-w-0 flex-1", collapsed && "md:hidden")}>
              <p className="truncate text-sm font-semibold">PeoplePay360</p>
              <p className="text-muted-foreground truncate text-xs">
                HR workspace
              </p>
            </div>
            <IconSelector
              className={cn(
                "text-muted-foreground size-4 shrink-0",
                collapsed && "md:hidden",
              )}
              stroke={1.8}
            />
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-3">
          {appNavigation.map((group) => (
            <div key={group.label} className="pb-2">
              <p
                className={cn(
                  "text-muted-foreground/70 flex h-7 items-center px-2 text-[0.6875rem] font-medium tracking-wide uppercase",
                  collapsed && "md:sr-only",
                )}
              >
                {group.label}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const active =
                    pathname === item.href || pathname.startsWith(`${item.href}/`);
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        prefetch={false}
                        title={collapsed ? item.label : undefined}
                        aria-current={active ? "page" : undefined}
                        onClick={onMobileClose}
                        className={cn(
                          "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-9 items-center gap-3 rounded-md px-2 text-sm transition-colors",
                          active &&
                            "bg-sidebar-accent text-sidebar-accent-foreground font-medium",
                          collapsed && "md:justify-center",
                        )}
                      >
                        <Icon
                          className={cn("size-[1.125rem] shrink-0", item.iconClassName)}
                          stroke={1.8}
                        />
                        <span className={cn("truncate", collapsed && "md:hidden")}>
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="shrink-0 border-t p-3">
          <div
            className={cn(
              "hover:bg-sidebar-accent flex items-center gap-3 rounded-lg p-2 transition-colors",
              collapsed && "md:justify-center",
            )}
          >
            <div className="bg-primary text-primary-foreground grid size-8 shrink-0 place-items-center rounded-lg text-xs font-semibold">
              {initial}
            </div>
            <div className={cn("min-w-0 flex-1", collapsed && "md:hidden")}>
              <p className="truncate text-sm font-medium">{user.email}</p>
              <p className="text-muted-foreground truncate text-xs">
                {formatRole(user.role)}
              </p>
            </div>
            <IconSelector
              className={cn(
                "text-muted-foreground size-4 shrink-0",
                collapsed && "md:hidden",
              )}
              stroke={1.8}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
