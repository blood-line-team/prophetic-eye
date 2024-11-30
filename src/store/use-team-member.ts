import { create } from "zustand";
export type TeamMemberInfor = {
  id: string;
  name: string;
  description: string;
  experienceUnits?: { id: string; description: string; stack: string }[];
};
export const useTeamMemberStore = create<{
  teamMemberInformation: TeamMemberInfor[];
  setTeamMemberInformation: (teamMemberInfo: TeamMemberInfor[]) => void;
}>((set) => ({
  teamMemberInformation: [],
  setTeamMemberInformation: (teamMember) => {
    set({ teamMemberInformation: teamMember });
  },
}));
