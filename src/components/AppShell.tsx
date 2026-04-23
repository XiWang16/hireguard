import { type ReactNode, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import clsx from "clsx";
import { useUIStore, type NavKey } from "../stores/uiStore";

// ─── Icons ────────────────────────────────────────────────────────────────────

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function ChartBarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function CogIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

// ─── Shield logo SVG ──────────────────────────────────────────────────────────

function ShieldLogo() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
      <path
        d="M7 1L1.5 3.5V8c0 3.5 2.5 5.5 5.5 6.5 3-1 5.5-3 5.5-6.5V3.5L7 1z"
        fill="white"
        fillOpacity="0.25"
        stroke="white"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 8l2 2L9.5 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Nav config ───────────────────────────────────────────────────────────────

const NAV_ITEMS: { id: NavKey; label: string; href: string; icon: ReactNode }[] = [
  { id: "dashboard",  label: "Dashboard",  href: "/",          icon: <HomeIcon /> },
  { id: "candidates", label: "Candidates", href: "/candidates", icon: <UsersIcon /> },
  { id: "checks",     label: "Checks",     href: "/checks",     icon: <ShieldCheckIcon /> },
  { id: "reports",    label: "Reports",    href: "/reports",    icon: <ChartBarIcon /> },
  { id: "settings",   label: "Settings",   href: "/settings",   icon: <CogIcon /> },
];

const PAGE_TITLES: Record<NavKey, string> = {
  dashboard:  "Dashboard",
  candidates: "Candidates",
  checks:     "Background Checks",
  reports:    "Reports",
  settings:   "Settings",
};

function getActiveNav(pathname: string): NavKey {
  if (pathname === "/" || pathname === "") return "dashboard";
  if (pathname.startsWith("/candidates")) return "candidates";
  if (pathname.startsWith("/checks")) return "checks";
  if (pathname.startsWith("/reports")) return "reports";
  if (pathname.startsWith("/settings")) return "settings";
  return "dashboard";
}

// ─── AppShell ─────────────────────────────────────────────────────────────────

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { darkMode, setDarkMode, sidebarCollapsed, setSidebarCollapsed, setActiveNav } =
    useUIStore();
  const location = useLocation();
  const currentNav = getActiveNav(location.pathname);

  useEffect(() => {
    setActiveNav(currentNav);
  }, [currentNav, setActiveNav]);

  return (
    <div className="flex h-full overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* ── Sidebar ───────────────────────────────────────────────── */}
      <aside
        className="flex flex-col shrink-0 border-r overflow-hidden"
        style={{
          width: sidebarCollapsed ? "58px" : "210px",
          transition: "width 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background: "var(--bg-2)",
          borderColor: "var(--border)",
        }}
      >
        {/* Logo row */}
        <div
          className="flex items-center gap-2.5 h-[54px] px-3.5 border-b shrink-0"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="shrink-0 w-7 h-7 rounded-[10px] flex items-center justify-center"
            style={{ background: "var(--accent)" }}
          >
            <ShieldLogo />
          </div>
          {!sidebarCollapsed && (
            <span
              className="flex-1 text-[13px] font-semibold tracking-[-0.02em] truncate"
              style={{ color: "var(--fg)" }}
            >
              HireGuard
            </span>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors"
            style={{ color: "var(--fg-3)" }}
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-2 py-3 flex flex-col gap-0.5 overflow-hidden">
          {NAV_ITEMS.map((item) => {
            const active = currentNav === item.id;
            return (
              <Link
                key={item.id}
                to={item.href}
                className={clsx(
                  "flex items-center rounded-[6px] text-[13px] font-medium transition-all duration-200 relative",
                  sidebarCollapsed ? "justify-center py-2 px-0" : "gap-2.5 py-[7px]",
                  !active && "hover:bg-[--bg-3]"
                )}
                style={{
                  background: active ? "var(--accent-dim)" : undefined,
                  color: active ? "var(--accent)" : "var(--fg-2)",
                  borderLeft: `2.5px solid ${active ? "var(--accent)" : "transparent"}`,
                  paddingLeft: sidebarCollapsed ? undefined : active ? "8px" : "10px",
                  paddingRight: sidebarCollapsed ? undefined : "10px",
                }}
              >
                <span className="shrink-0">{item.icon}</span>
                {!sidebarCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User row */}
        <div
          className="px-2 pb-3 pt-2 border-t shrink-0"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className={clsx(
              "flex items-center rounded-[6px] py-1.5",
              sidebarCollapsed ? "justify-center px-0" : "gap-2.5 px-2"
            )}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              XW
            </div>
            {!sidebarCollapsed && (
              <div className="min-w-0">
                <p
                  className="text-[12px] font-medium truncate"
                  style={{ color: "var(--fg)" }}
                >
                  Xi Wang
                </p>
                <p className="text-[11px] truncate" style={{ color: "var(--fg-3)" }}>
                  Admin
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* ── Right column: topbar + main ───────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Topbar */}
        <header
          className="flex items-center justify-between h-[54px] px-5 shrink-0 border-b"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          <h1
            className="text-[15px] font-medium tracking-[-0.02em]"
            style={{ color: "var(--fg)" }}
          >
            {PAGE_TITLES[currentNav]}
          </h1>

          <div className="flex items-center gap-1.5">
            {/* New Candidate button */}
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[13px] font-medium transition-all hover:opacity-[0.88] active:translate-y-0"
              style={{ background: "var(--accent)", color: "white" }}
            >
              <PlusIcon />
              New Candidate
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-8 h-8 rounded-[6px] flex items-center justify-center transition-all hover:bg-[--bg-3] hover:scale-[1.05]"
              style={{ color: "var(--fg-2)" }}
              title="Toggle dark mode"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Bell */}
            <button
              className="relative w-8 h-8 rounded-[6px] flex items-center justify-center transition-all hover:bg-[--bg-3] hover:scale-[1.05]"
              style={{ color: "var(--fg-2)" }}
            >
              <BellIcon />
              <span className="absolute top-[7px] right-[7px] w-1.5 h-1.5 rounded-full bg-red-500" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 min-h-0 overflow-hidden" style={{ background: "var(--bg)" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
