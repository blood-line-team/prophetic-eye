import axiosClient from "../config/axios-client";

interface IPostAddExperienceUnitsInput {
  team_member: string;
  project: string;
  experience_units: {
    description: string;
    tech_stack: string;
  }[];
}

export const postAddExperienceUnits = async (
  inputs: IPostAddExperienceUnitsInput
) => {
  try {
    const { data } = await axiosClient.post("/add-experience-units", {
      ...inputs,
    });

    return data;
  } catch (error) {
    return undefined;
  }
};
