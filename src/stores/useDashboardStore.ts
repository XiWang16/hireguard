import { create } from "zustand";

type ActiveTab = "pipeline" | "audit" | "agents";

interface DashboardState {
  activeTab: ActiveTab;
  sidebarOpen: boolean;
  comparisonMode: boolean;
  selectedCandidateIds: Set<string>;
  toggleSidebar: () => void;
  setTab: (tab: ActiveTab) => void;
  toggleCandidate: (id: string) => void;
  clearSelection: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activeTab: "pipeline",
  sidebarOpen: true,
  comparisonMode: false,
  selectedCandidateIds: new Set(),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setTab: (tab) => set({ activeTab: tab }),
  toggleCandidate: (id) =>
    set((s) => {
      const next = new Set(s.selectedCandidateIds);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { selectedCandidateIds: next };
    }),
  clearSelection: () => set({ selectedCandidateIds: new Set() }),
}));
