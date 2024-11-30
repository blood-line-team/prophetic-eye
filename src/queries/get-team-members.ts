import axiosClient from "../config/axios-client";
import { TeamMember } from "../types";

export const getTeamMembersData = async () => {
  try {
    const response = await axiosClient.get<TeamMember[]>("/get-team-members");
    return response.data;
  } catch {
    return [];
  }
};
