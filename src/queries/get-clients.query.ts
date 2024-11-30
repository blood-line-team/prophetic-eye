import axiosClient from "../config/axios-client";

export interface IGetClients {
  name: string;
}

export const getClients = async () => {
  try {
    const { data } = await axiosClient.get<IGetClients>("/get-projects");
    return data;
  } catch (error) {
    return [];
  }
};
