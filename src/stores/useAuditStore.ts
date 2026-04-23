import { create } from "zustand";

type DemographicDimension = "gender" | "ethnicity" | "ageBand" | "disability";

interface AuditState {
  selectedDemographic: DemographicDimension;
  thresholdOverride: number;
  showStatisticalDetails: boolean;
  setDemographic: (d: DemographicDimension) => void;
  setThreshold: (t: number) => void;
  toggleDetails: () => void;
}

export const useAuditStore = create<AuditState>((set) => ({
  selectedDemographic: "gender",
  thresholdOverride: 0.8,
  showStatisticalDetails: false,
  setDemographic: (selectedDemographic) => set({ selectedDemographic }),
  setThreshold: (thresholdOverride) => set({ thresholdOverride }),
  toggleDetails: () => set((s) => ({ showStatisticalDetails: !s.showStatisticalDetails })),
}));
