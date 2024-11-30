import axiosClient from "../config/axios-client";

interface ITeamMemberExperience {
  description: string;
  tech_stack: string;
}

export const useGetTeamMemberExperience = async (
  project_description: string
) => {
  try {
    const { data } = await axiosClient.get<ITeamMemberExperience>(
      "/get-team-member-experience-units",
      {
        params: {
          project_description,
        },
      }
    );

    return data;
  } catch (error) {}
};
