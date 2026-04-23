import { create } from "zustand";

export type NavKey = "dashboard" | "candidates" | "checks" | "reports" | "settings";

interface UIStore {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
  selectedCandidateId: string | null;
  setSelectedCandidateId: (id: string | null) => void;
  activeNav: NavKey;
  setActiveNav: (v: NavKey) => void;
}

const saved = typeof window !== "undefined" ? localStorage.getItem("hg-dark") : null;
const prefersDark =
  typeof window !== "undefined"
    ? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false)
    : false;
const initialDark = saved !== null ? saved === "true" : prefersDark;

if (typeof document !== "undefined") {
  document.documentElement.classList.toggle("dark", initialDark);
}

export const useUIStore = create<UIStore>((set) => ({
  darkMode: initialDark,
  setDarkMode: (v) => {
    localStorage.setItem("hg-dark", String(v));
    document.documentElement.classList.toggle("dark", v);
    set({ darkMode: v });
  },
  sidebarCollapsed: false,
  setSidebarCollapsed: (v) => set({ sidebarCollapsed: v }),
  selectedCandidateId: null,
  setSelectedCandidateId: (id) => set({ selectedCandidateId: id }),
  activeNav: "dashboard",
  setActiveNav: (v) => set({ activeNav: v }),
}));
