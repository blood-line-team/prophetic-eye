import { create } from "zustand";
export type TeamMemberInfor = {
  id: string;
  name: string;
  description: string;
  type: "PreviousExperience" | "Clients";
  experienceUnits?: { id: string; description: string; stack: string }[];
};
export const useTeamMemberStore = create<{
  teamMemberInformation: TeamMemberInfor[];
  addInformation: (teamMemberInfo: TeamMemberInfor) => void;
  removeInformation: (id: string) => void;
}>((set, get) => ({
  teamMemberInformation: [],

  addInformation: (teamMemberInfo) => {
    set({
      teamMemberInformation: [...get().teamMemberInformation, teamMemberInfo],
    });
  },
  removeInformation: (id) => {
    set({
      teamMemberInformation: get().teamMemberInformation.filter(
        (information) => information.id !== id
      ),
    });
  },
}));
