import axiosClient from "../config/axios-client";

export const useGetExperienceUnits = async (
  clientName: string,
  description: string
) => {
  try {
    const { data } = await axiosClient.get("/experience-units", {
      params: {
        clientName,
        description,
      },
    });
    return data;
  } catch (error) {
    return [];
  }
};
