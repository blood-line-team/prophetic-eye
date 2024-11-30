import axiosClient from "../config/axios-client";
import { TeamMember } from "../types";

export interface IGetTeamMemberRecommendation extends TeamMember {
  reason: string;
}

export const getTeamMemberRecommendation = async (
  client_requirements: string
) => {
  try {
    const { data } = await axiosClient.post<IGetTeamMemberRecommendation>(
      "/get-team-member-recommendation",
      {
        client_requirements,
      }
    );
    return data;
  } catch (error) {
    return [];
  }
};
