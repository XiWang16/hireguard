import { create } from "zustand";

type CandidateStatus = "received" | "parsing" | "evaluated" | "shortlisted" | "rejected" | "hired";

interface FilterState {
  candidateStatusFilter: CandidateStatus[];
  departmentFilter: string | null;
  dateRange: { start: number | null; end: number | null };
  searchQuery: string;
  setFilter: <K extends keyof Omit<FilterState, "setFilter" | "clearFilters" | "toggleStatus">>(
    key: K,
    value: FilterState[K]
  ) => void;
  clearFilters: () => void;
  toggleStatus: (status: CandidateStatus) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  candidateStatusFilter: [],
  departmentFilter: null,
  dateRange: { start: null, end: null },
  searchQuery: "",
  setFilter: (key, value) => set({ [key]: value }),
  clearFilters: () =>
    set({
      candidateStatusFilter: [],
      departmentFilter: null,
      dateRange: { start: null, end: null },
      searchQuery: "",
    }),
  toggleStatus: (status) =>
    set((state) => ({
      candidateStatusFilter: state.candidateStatusFilter.includes(status)
        ? state.candidateStatusFilter.filter((s) => s !== status)
        : [...state.candidateStatusFilter, status],
    })),
}));
