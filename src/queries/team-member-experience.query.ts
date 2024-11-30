import axiosClient from "../config/axios-client";

interface ITeamMemberExperience {
  description: string;
  tech_stack: string;
}

export const getTeamMemberExperience = async (project_description: string) => {
  try {
    const { data } = await axiosClient.post<ITeamMemberExperience[]>(
      "/get-team-member-experience-units",
      {
        project_description,
      }
    );

    return data;
  } catch (error) {}
};
